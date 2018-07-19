import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { TradePage } from '../pages/trade/trade';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { OptionsPage } from '../pages/options/options';
import { AppAuthProvider } from '../providers/app-auth/app-auth';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { IgdbProvider } from '../providers/igdb/igdb';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TradeProvider } from '../providers/trade/trade';
import { ProfileProvider } from '../providers/profile/profile';

import { KeysPipe } from '../pipes/keys/keys';

@NgModule({
  declarations: [
    MyApp,
    TradePage,
    ContactPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    OptionsPage,
    TabsPage,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.web),
    AngularFireDatabaseModule,
    HttpClientModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TradePage,
    ContactPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    OptionsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    Geolocation,
    AngularFireDatabase,
    AppAuthProvider,
    HttpClient,
    IgdbProvider,
    TradeProvider,
    ProfileProvider
  ]
})
export class AppModule {}
