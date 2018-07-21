import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TradeProvider {

  matchingTraders:any = [];

  constructor(public http: HttpClient) {
  }


  getNearestPossibleTrades(key){
  	console.log("provider getNPT: " + key)

  	var headers = new HttpHeaders()
          .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4")

   	// var url = "https://lemon-data-center-js.herokuapp.com/";
   	var url = 'http://localhost:3000/api/getNPT?key='+key;

  	this.http.get(url, {headers}).subscribe((res)=>{
      
      this.matchingTraders = res;
      console.log("get getNearestPossibleTrades: ", this.matchingTraders)
  	});
  }
  

}
