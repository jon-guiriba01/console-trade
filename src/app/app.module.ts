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
import { MessagesPage } from '../pages/messages/messages';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { OptionsPage } from '../pages/options/options';
import { ChatPage } from '../pages/chat/chat';
import { MapPage } from '../pages/map/map';
import { DealPage } from '../pages/deal/deal';
import { ShopPage } from '../pages/shop/shop';
import { CourierPopoverPage } from '../pages/courier-popover/courier-popover';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { AllTradersPage } from '../pages/all-traders/all-traders';


import { AppAuthProvider } from '../providers/app-auth/app-auth';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { IgdbProvider } from '../providers/igdb/igdb';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TradeProvider } from '../providers/trade/trade';
import { ProfileProvider } from '../providers/profile/profile';

import { PipesModule } from '../pipes/pipes.module';
import { FirebaseappProvider } from '../providers/firebaseapp/firebaseapp';
import { LongPressModule } from 'ionic-long-press';
import { UiProvider } from '../providers/ui/ui';
import { IonicImageLoader } from 'ionic-image-loader';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { ImagePicker } from '@ionic-native/image-picker';
import { StorageProvider } from '../providers/storage/storage';
import { ImageResizer } from '@ionic-native/image-resizer';
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicStorageModule } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer';
import { MessagesProvider } from '../providers/messages/messages';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    TradePage,
    MessagesPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    OptionsPage,
    MapPage,
    DealPage,
    ShopPage,
    CourierPopoverPage,
    ResetpasswordPage,
    AllTradersPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.web),
    AngularFireDatabaseModule,
    HttpClientModule,
    LongPressModule,
    PipesModule,
    IonicImageLoader.forRoot(),
    NgxErrorsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    TradePage,
    MessagesPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    OptionsPage,
    MapPage,
    DealPage,
    ShopPage,
    CourierPopoverPage,
    ResetpasswordPage,
    AllTradersPage,
    TabsPage
  ],
  providers: [
    // { provide: FirebaseOptionsToken, useValue: firebaseConfig.web },
    // { provide: FirebaseAppNameToken, useValue: 'stalldata' },
    // { provide: FirebaseAppConfigToken, useValue: firebaseConfig.web},
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
    ProfileProvider,
    FirebaseappProvider,
    UiProvider,
    FileTransfer,
    File,
    FileChooser,
    ImagePicker,
    ImageResizer,
    GooglePlus,
    EmailComposer,
    StorageProvider,
    MessagesProvider
  ]
})
export class AppModule {}
