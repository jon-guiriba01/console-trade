import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, App } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { Geolocation } from '@ionic-native/geolocation';
import { FirebaseappProvider } from '../../providers/firebaseapp/firebaseapp';


declare var google: any;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

	@ViewChild('map') mapElement: ElementRef;

	map: any;
	geocoder: any;
	places: any;
	markers = [];
	sessionToken;
	searchInput = "";
	target;
	canEdit = true;

  constructor(
  	public navCtrl: NavController
  	, public navParams: NavParams
		, public platform: Platform
		, private geolocation: Geolocation
		, private profile: ProfileProvider
  	, public fbApp: FirebaseappProvider
 ) {
  	this.sessionToken = new google.maps.places.AutocompleteSessionToken();


  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
  	this.target = this.profile.user;
  	let customTarget = this.navParams.get('target');

  	if(customTarget){
  		this.canEdit = false;
  		this.target = customTarget;
  	}


    this.platform.ready().then(() => {
			if(google){
	  		this.geocoder = new google.maps.Geocoder();
	  		this.places = new google.maps.places.AutocompleteService();


	    	this.initMap();
			}
	  });
  }

  timeout;
  searchLocation(){
  	console.log("searchLocation: " + this.searchInput)
  	clearTimeout(this.timeout);
  	
  	this.timeout = setTimeout(()=>{

  	this.places.getPlacePredictions({
  		input: this.searchInput,
  		sessionToken: this.sessionToken
  }, (res)=>{
  		console.log("place prediction ", res)
  	})

  	}, 500)
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
	    this.addMarker(mylocation ,{label:"YOU", remember:false})

  		this.initAutoComplete(resp);
  		this.initClickEvent();

	    for(let tradeLocation of this.target.trade_locations){
		    	this.geocoder.geocode({'address': tradeLocation}, function(res,status){
		        if (status === 'OK') {
				    		self.addMarker(
				    			res[0].geometry.location, 
				    			// {icon:"assets/imgs/blue_marker.png"}
			    			)
		        }else{
		        	console.log("Geocode was not successful for the following reason: "  + status)
		        }
    			})
	    }


			// this.geocoder.geocode({'address': "SM Fairview Quezon City"}, function(results, status) {
   //      if (status === 'OK') {
   //        var marker = new google.maps.Marker({
   //          map: self.map,
		 //    		label: "6",
   //          position: results[0].geometry.location
   //        });

		 //  	  var infowindow = new google.maps.InfoWindow({
			// 	  });

		 //  	  marker.addListener('click', function(){
		 //  	  	console.log("clicked");
		 //  	  	var content = "<div class='infow-container'>"
		 //  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/mievpzb9rbzzenmznvnr.jpg'>"
		 //  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg'>"
		 //  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/gfzcaqqg1iinenf1rntp.jpg'>"
		 //  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/rzjnrhuv5rozj52g9aq3.jpg'>"
		 //  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/kqlntgss9yb5invq8nxi.jpg'>"
		 //  	  	+ "<img class='infow-img' src='https://images.igdb.com/igdb/image/upload/t_thumb/rzjnrhuv5rozj52g9aq3.jpg'>"
		 //  	  	+ "</div>"
		 //  	  	infowindow.setContent(content)
		 //  	 	  infowindow.open(this.map, marker);
		 //  	  });


   //      } else {
   //        alert('Geocode was not successful for the following reason: ' + status);
   //      }
   //    });
  	  


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

	initAutoComplete(userLocation){
		var mylocation = new google.maps.LatLng(userLocation.coords.latitude,userLocation.coords.longitude);
		var input = document.getElementById('autocomplete');

		this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

	 	var circle = new google.maps.Circle({
	    center: mylocation,
	    radius: userLocation.coords.accuracy
	  });
		this.places = new google.maps.places.PlacesService(this.map);

		var autocomplete = new google.maps.places.Autocomplete( 
			input,  {
				bounds: circle.getBounds(),
				stritctBounds: true
			}
		);

		var self = this;

		autocomplete.addListener('place_changed', function(){

	    var place = this.getPlace();
	  	if(!place) return;

	    console.log("place", place)
	    if (place.geometry) {
	      self.map.panTo(place.geometry.location);
	      self.map.setZoom(15);
	      self.addMarker(place.geometry.location)

	    	self.addTradeLocation(place.formatted_address);

	    } else {
	    }
		});

	}

	initClickEvent(){
		if(!this.canEdit) return;
    this.map.addListener("click", (event)=>{

		    var latitude = event.latLng.lat();
		    var longitude = event.latLng.lng();

		    this.geocoder.geocode({'location': event.latLng}, (res)=>{
		    	console.log("click ", res)
		    	if(!res) return;
		    	this.addMarker(event.latLng)
		    	this.addTradeLocation(res[0].formatted_address);
		    })
		}); 
	}

	dbTimeout;
	addTradeLocation(location){
		if(!this.canEdit) return;
		clearTimeout(this.dbTimeout);


			this.target.trade_locations.push(location);

			if(this.target.trade_locations.length > 3){
				this.removeLastTradeLocation();
			}

	  	console.log("[map] addTradeLocation ", this.target)

		this.dbTimeout = setTimeout(()=>{
			this.fbApp.updateUserTradeLocations(this.target.key, this.target.trade_locations)
		},500);

	}

	removeLastTradeLocation(){
  	let tradeLocation = this.target.trade_locations.shift();
  	let marker = this.markers[0];
		console.log("removing ", this.markers, this.target.trade_locations)
		marker.setMap(null)
  	this.markers.shift();
	}

  onPlaceChanged(autocomplete, map) {

    var place = autocomplete.getPlace();
  	if(!place) return;

    console.log("place", place)
    if (place.geometry) {
      map.panTo(place.geometry.location);
      map.setZoom(15);
      // search();
    } else {
      // document.getElementById('autocomplete').placeholder = 'Enter a city';
    }
  }



	addMarker(position, options = null) {
		options = options ? options : {remember: true};

	  let marker = new google.maps.Marker({
	    map: this.map,
	    position: position,
	    label: options.label,
	    icon: options.icon
	  });

	  if(options.remember)
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
