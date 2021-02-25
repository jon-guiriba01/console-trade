import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShopPage } from '../../pages/shop/shop';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  formInputs = {
    name: "",
    email: "",
    contactNo: "",
  }

  cart = {
    games: []
  };

  form : FormGroup;
  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private formBuilder: FormBuilder
    , public emailComposer: EmailComposer
    , public http: HttpClient
   ) {
    this.cart = this.navParams.get("cart");

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  submit(){
    this.sendEmail()
  }

  sendEmail(){

    let body = {
      name: this.form.value.name
      ,email: this.form.value.email
      ,contactNo: this.form.value.contactNo
      ,address: this.form.value.address
      ,to: "lemontree.development@gmail.com"
      ,subj: "CONSOLE TRADE - RENT ORDER"
    }
    this.http.post("https://lemon-data-center-js.herokuapp.com/api/email", body, {})
    // this.http.post("http://localhost:3000/api/email", body, {})
      .subscribe(data => {

        this.navCtrl.setRoot(ShopPage, {
          orderSuccess: data
        });
        console.log("success sending mail ",data);
       }, error => {
        console.log("error sending mail", error);
      });


  }
  ionViewDidLoad() {
  }

}
