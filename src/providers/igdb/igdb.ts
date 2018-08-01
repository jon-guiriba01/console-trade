import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { C } from '../../config';
import { map, take, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class IgdbProvider {

// const PS4_ID = 48;
// const NINTENDO_SWITCH_ID = 130;
// const XBOX_ONE = 49;

	searchOptions = [];

  constructor(public http: HttpClient){

  }

  search(input){
  	const headers = new HttpHeaders()
            .set("user-key", "5227ae6e46cee2806cf25779d4c97966")
            .set("Accept", "application/json")

    var excludedPlatforms = "0";
    var included = [
      41 // wii
      ,48 // xbox1
      ,49 // ps4
      ,130 // switch
    ]

    for(var i = 1; i < 150; i++){
      if(included.indexOf(i) > -1) continue;
      excludedPlatforms += ","+i;
    }


    var search = 
    "https://api-endpoint.igdb.com/games/"
    + "?search="+input
    + "&filter[release_dates.platform][not_in]="+excludedPlatforms
    + "&filter[category][eq]="+"0"
    + "&filter[release_dates.platform][exists]"
    + "&filter[version_parent][not_exists]"
    + "&fields=*";
    // var search = 'https://api-endpoint.igdb.com/games/?search=' + input +
  		// "&filter[release_dates.platform][any]=48,49,130" +
  		// "&filter[version_parent][not_exists]=1" +
  		// "&fields=*";

  	var httpSub = this.http.get( search, {headers}).subscribe((res:Array<object>)=>{
  		var gameIds = "";
			console.log("res", res)

  		var first = true;

  		for( var r of res){

  				if(first)
  					gameIds += r["id"];
  				else
  					gameIds += ","+r["id"];

  				first = false;
  		}

  		this.searchOptions = res;
      httpSub.unsubscribe();
  	});

  }

}
