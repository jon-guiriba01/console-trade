import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IgdbProvider } from '../../providers/igdb/igdb';
import { Game } from '../../models/game';
import { C } from '../../config';

@Component({
  selector: 'page-deal',
  templateUrl: 'deal.html',
})
export class DealPage {
	searchInput
  searchIsLoading = false;
  searchOptions : any = [];
  cart = [];
  submitText = "Evaluate";
  
  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
    , public igdb: IgdbProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealPage');
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

  addGameToCart(item){
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
  	this.searchInput = null;

  	this.cart.push(game)
  	console.log(this.cart)
  	this.clearSearch();
  }


  removeItem(item){
    this.cart = this.cart.filter(e => e.id !== item.id);
  }
}
