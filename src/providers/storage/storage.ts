import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient) {
  }

  uploadImage(image, userEmail){
  	return new Promise((resolve, reject) =>{

  	let storageRef = firebase.storage().ref(`images/${userEmail}/profile`);
 		let parseUpload = storageRef.putString(image, 'data_url');

    parseUpload.on('state_changed', (_snapshot) =>{
       console.log('snapshot progess ',_snapshot);

    },
    (_err) =>{
       reject(_err);
    },
    () =>{
    	storageRef.getDownloadURL().then((res)=>{
       resolve(res);
     })
    });

  	});
  }

}
