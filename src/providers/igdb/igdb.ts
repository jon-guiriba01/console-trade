import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { C } from '../../config';

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



    var search = "https://api-endpoint.igdb.com/games/?search="+input+"&filter[release_dates.platform][any]=48,49,130&fields=*";
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
