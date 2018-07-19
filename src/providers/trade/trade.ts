import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TradeProvider {
  constructor(public http: HttpClient) {
  }


  getNearestPossibleTrades(email){
  	console.log("provider getNPT: " + email)

	var headers = new HttpHeaders()
        .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4")

 	// var url = "https://lemon-data-center-js.herokuapp.com/";
 	var url = 'http://localhost:3000/api/getNPT?email='+email;

  	this.http.get(url, {headers}).subscribe((res)=>{
  		console.log("res", res)
  	});
  }
  

}
