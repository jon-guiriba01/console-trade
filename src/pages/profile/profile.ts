import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, App, Platform, Events, LoadingController} from 'ionic-angular';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { IgdbProvider } from '../../providers/igdb/igdb';
import { Game } from '../../models/game';
import { C } from '../../config';
import * as _ from 'underscore/underscore';
import { IonicImageLoader, ImageLoaderConfig } from 'ionic-image-loader';
import { MapPage } from '../../pages/map/map';

import { FileTransfer, FileUploadOptions, FileTransferObject  } from '@ionic-native/file-transfer';
import { File, FileEntry  } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';
import * as $ from 'jquery'
import { StorageProvider } from '../../providers/storage/storage';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';
import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	searchInput
  searchIsLoading = false;
  searchOptions : any = [];

  constructor(
  	public navCtrl: NavController
    , public igdb: IgdbProvider
    , private auth: AppAuthProvider
    , private profile: ProfileProvider
    , private imgLoader: ImageLoaderConfig
    , private app: App
    , private events: Events
    , private transfer: FileTransfer
    , private file: File
    , private fileChooser: FileChooser
    , private imagePicker: ImagePicker
    , public platform: Platform
    , public fbApp: FirebaseappProvider
    , public fbStorage: StorageProvider
    , public loadingCtrl: LoadingController
    , private imageResizer: ImageResizer
	) {
    imgLoader.setBackgroundSize('cover');

  }

  toggleItemOwnership(item, owned){
    this.profile.toggleItemOwnership(this.auth.user, item, owned);
    this.events.publish("profile:changed")
  }

  toggleItemPlatform(item, platform, owned){
    this.profile.toggleItemPlatform(this.auth.user, item, platform, owned);
    this.events.publish("profile:changed")
  }

  removeItem(item, owned){
    console.log("pressing")
    this.profile.removeItem(this.auth.user, item, owned);

    this.events.publish("profile:changed")
  }

  timeout
  searchtTitle(){
    this.searchIsLoading = true;
  	clearTimeout(this.timeout);
  	
  	this.timeout = setTimeout(()=>{

  		if(!this.searchInput || this.searchInput.length < 2){
        this.clearSearch();
      }
      else{ 
        this.igdb.search(this.searchInput).then((res: Array<any>)=>{
          this.searchOptions = res;

          if(res.length == 0){
            this.searchOptions.push({id: "err", name: "No Games Found"})
          }

          this.searchIsLoading = false;
        });
      }

  	}, 300)
  }

  clearSearch(){
    this.searchIsLoading = false;
  	this.searchOptions = [];
  }

  addGameToProfile(item){
    if(item.id === "err") return;

  	var platforms = [""];
  	
  	if(item.platforms){
	  	if(item.platforms.includes(C.PS4_ID))
	  		platforms.push(C.PS4)

	  	if(item.platforms.includes(C.NS_ID))
	  		platforms.push(C.NS)

	  	if(item.platforms.includes(C.XBOX1_ID))
	  		platforms.push(C.XBOX1)
  	}
    var url = null;
    if(item.cover)
  	  url = item.cover.url.replace("thumb","cover_big").replace("//","http://")

    var game = new Game(item.id, item.name, url, platforms);
  	this.profile.addGameToProfile(this.auth.user, game, false)
  	this.searchInput = null;
  	this.searchOptions = [];

    this.events.publish("profile:changed")
  }

  navToMap(){
      this.app.getRootNavs()[0].push(MapPage);
  }

  uploadImage(){

    if(this.platform.is('core')){
      this.uploadImage_web()
    }else if(this.platform.is('android')){
      this.uploadImage_and()
    }

  }

  uploadImage_and(){
    return new Promise((resolve,reject)=>{

      this.imagePicker.getPictures({
        maximumImagesCount:1,
        outputType:0
      }).then(res =>{
        if(!res){
          return
        }
        let file = res[0];
        return this.file.resolveLocalFilesystemUrl(file)
      }).then((file : FileEntry)=>{
          return this.imageResizer
          .resize({
             uri: file.nativeURL,
             quality: 100,
             width: 90,
             height: 180,
          })
      }).then((filePath)=>{
          return this.file.resolveLocalFilesystemUrl(filePath)
      }).then( (file : FileEntry)=>{
         return this.file.readAsDataURL(file.filesystem.root.nativeURL, file.name)
      }).then(res=>{
        this.storeImage(res)
      })      
      .catch(e => console.log(e));




    });
  }

  uploadImage_web(){
    return new Promise((resolve,reject)=>{

      $('#fileInput').trigger("click")
      $('#fileInput').change(()=> {


        let file = $('#fileInput')[0]['files'][0];
        
        if(!file) return;
        this.getBase64(file).then(res=>{
          //TODO resize image
          this.storeImage(res)
        })

      });

    })
  }

  private storeImage(base64){
    console.log("[storeImage]",base64)

    let loading = this.loadingCtrl.create({
      content: 'Uploading image...'
    });

    loading.present();

    this.fbStorage.uploadImage(base64, this.profile.user.email)
    .then( (res:string)=>{
       console.log("upload image",res)
       this.fbApp.updateUserProfileImage(this.profile.user.key, res);
       this.profile.user.profileImage = res;

       loading.dismiss();
    }).catch(()=>{
     loading.dismiss();
    })
  }

  private getBase64(file) : Promise<any> {
    return new Promise((resolve,reject)=>{
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function () {
       resolve(reader.result)
     };
     reader.onerror = function (error) {
       reject(error);
     };
    })
  
  }

  private getExt(filename){
    var idx = filename.lastIndexOf('.');
    return (idx < 1) ? "" : filename.substr(idx + 1);
  }

}
