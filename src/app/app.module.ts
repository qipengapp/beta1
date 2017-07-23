import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
import { CompinfoPage } from '../pages/compinfo/compinfo';
import { IndustrylistPage } from '../pages/industrylist/industrylist';

=======
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
<<<<<<< HEAD
import { CodeBean } from '../pages/login/code.bean';
=======
>>>>>>> f0e8302cae0da5500903182744fbabcff7cd1112
>>>>>>> 589fde3f0aa9d531eb63f58236e96e14fd78fbac

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/Storage';
import { HttpService } from "../service/http.service";
import { UserService } from "../service/user.service";
import { HttpModule } from "@angular/http";

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
<<<<<<< HEAD
    TabsPage,
    CompinfoPage,
    IndustrylistPage
=======
    WelcomePage,
    LoginPage,
    TabsPage
>>>>>>> f0e8302cae0da5500903182744fbabcff7cd1112
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
<<<<<<< HEAD
    TabsPage,
    CompinfoPage,
    IndustrylistPage
=======
    WelcomePage,
    LoginPage,
    TabsPage
>>>>>>> f0e8302cae0da5500903182744fbabcff7cd1112
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    UserService,
    CodeBean
  ]
})
export class AppModule {}
