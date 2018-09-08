import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TradeProvider {

  matchingTraders:any = [];
  loading = false;

  constructor(public http: HttpClient) {
  }


  getNearestPossibleTrades(key, limit = 15, offset = 0){
  	// console.log("[GetNeareastPossibleTrades] " + key)
    return new Promise((resolve,reject)=>{
      var headers = new HttpHeaders()
            .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4")

       var url = `https://lemon-data-center-js.herokuapp.com/api/getNPT?key=${key}&limit=${limit}&offset=${offset}`;
       // var url = `http://localhost:3000/api/getNPT?key=${key}&limit=${limit}&offset=${offset}`;

      this.loading = true;

      var httpSub = this.http.get(url, {headers}).subscribe((res)=>{
        
        this.matchingTraders = res ? res : [];
        // console.log("get getNearestPossibleTrades: ", this.matchingTraders)
        
        this.loading = false;
        resolve(this.matchingTraders)
        httpSub.unsubscribe();
      });

    })
  }

  getNearestTrades(key, limit = 15, offset = 0){
    // console.log("[GetNeareastTrades] " + key)
    return new Promise((resolve,reject)=>{
      var headers = new HttpHeaders()
            .set("key", "eJQ0S7PjPs9BJJEJY8fXaJTNrngJIko4")

       var url = `https://lemon-data-center-js.herokuapp.com/api/getNT?key=${key}&limit=${limit}&offset=${offset}`;
       // var url = `http://localhost:3000/api/getNT?key=${key}&limit=${limit}&offset=${offset}`;

      this.loading = true;

      var httpSub = this.http.get(url, {headers}).subscribe((res)=>{
        
        this.matchingTraders = res ? res : [];
        // console.log("get getNearestPossibleTrades: ", this.matchingTraders)
        
        this.loading = false;
        resolve(this.matchingTraders)
        httpSub.unsubscribe();
      });
    
    })

  }
  

}
