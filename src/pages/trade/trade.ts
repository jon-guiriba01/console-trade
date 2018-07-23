import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, App } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AppAuthProvider } from '../../providers/app-auth/app-auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { TradeProvider } from '../../providers/trade/trade';
import { ChatPage } from '../../pages/chat/chat';

import { Profile } from '../../models/profile';
import { C } from '../../config';
declare var google: any;

@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html'
})
export class TradePage {

	@ViewChild('map') mapElement: ElementRef;
	map: any;
	geocoder: any;
	markers = [];


  constructor(
  	public navCtrl: NavController
		, public platform: Platform
  	, private auth: AppAuthProvider
		, private geolocation: Geolocation
		, private trade: TradeProvider
		, private profile: ProfileProvider
		, private app: App
  	) {


  }

  ionViewDidLoad() {
   //  this.platform.ready().then(() => {
			// if(google){
	  // 		this.geocoder = new google.maps.Geocoder();
	  //   	this.initMap();
			// }
	  // });
  }

  getNearestPossibleTrades(){
  	console.log("getNearestPossibleTrades")
  	this.trade.getNearestPossibleTrades(this.profile.user.key);
  }

  showChat(trader){
  	this.app.getRootNavs()[0].push(ChatPage, {
  		trader : trader
  	});
  }

  initMap() {
  	var self = this;

	  this.geolocation.getCurrentPosition().then((resp) => {
	    let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
	    // let mylocation = new google.maps.LatLng(14.710761999999999,121.05234990000001);
	    
	    this.map = new google.maps.Map(this.mapElement.nativeElement, {
	      zoom: 15,
	      disableDefaultUI: true,
	      center: mylocation
	    });

	    this.addMarker(mylocation)

	    for(let tradeLocation of this.profile.user.tradeLocations){
		    	this.geocoder.geocode({'address': tradeLocation["location"]}, function(res,status){
		        if (status === 'OK') {
				    		self.addMarker(res[0].geometry.location, null, "assets/imgs/blue_marker.png")
		        }else{
		        	console.log("Geocode was not successful for the following reason: "  + status)
		        }
    			})
	    }


			this.geocoder.geocode({'address': "SM Fairview Quezon City"}, function(results, status) {
        if (status === 'OK') {
          var marker = new google.maps.Marker({
            map: self.map,
		    		label: "6",
            position: results[0].geometry.location
          });

		  	  var infowindow = new google.maps.InfoWindow({
				  });

		  	  marker.addListener('click', function(){
		  	  	console.log("clicked");
		  	  	var content = "<div class='infow-container'>"
		  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/mievpzb9rbzzenmznvnr.jpg'>"
		  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg'>"
		  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/gfzcaqqg1iinenf1rntp.jpg'>"
		  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/rzjnrhuv5rozj52g9aq3.jpg'>"
		  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg'>"
		  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/rzjnrhuv5rozj52g9aq3.jpg'>"
		  	  	+ "</div>"
		  	  	infowindow.setContent(content)
		  	 	  infowindow.open(this.map, marker);
		  	  });


        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
  	  


	  }).catch((e)=>{
	  		console.log("errrr",e);
	  });
	  // let watch = this.geolocation.watchPosition();
	  // watch.subscribe((data) => {
	  //   this.deleteMarkers();
	  //   let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
	  //   let image = 'assets/imgs/ns_icon.png';
	  //   this.addMarker(updatelocation,image);
	  //   this.setMapOnAll(this.map);
	  // });
	}


	addMarker(position, label = null, image = null) {
	  let marker = new google.maps.Marker({
	    map: this.map,
	    position: position,
	    label: label,
	    icon: image
	  });
	  this.markers.push(marker);
	}

	setMapOnAll(map) {
	  for (var i = 0; i < this.markers.length; i++) {
	    this.markers[i].setMap(map);
	  }
	}

	clearMarkers() {
	  this.setMapOnAll(null);
	}

	deleteMarkers() {
	  this.clearMarkers();
	  this.markers = [];
	}
}
