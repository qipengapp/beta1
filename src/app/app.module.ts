import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CompinfoPage } from '../pages/compinfo/compinfo';
import { IndustrylistPage } from '../pages/industrylist/industrylist';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { CodeBean } from '../pages/login/code.bean';
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
    TabsPage,
    CompinfoPage,
    IndustrylistPage,
    WelcomePage,
    LoginPage,
    TabsPage
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
    CompinfoPage,
    IndustrylistPage,
    WelcomePage,
    LoginPage,
    TabsPage
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
