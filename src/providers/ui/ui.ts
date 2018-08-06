import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UiProvider Provider');
  }

  getRandomProfileImage(){
 		return 0;
  }


	getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}
