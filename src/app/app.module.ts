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
import { LoginPage } from '../pages/login/login'
import { LogonPage } from '../pages/logon/logon'
import { LoginSelectPage } from '../pages/login-select/login-select'
import { CodeBean } from '../pages/login/code.bean';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/Storage';
import { HttpService } from "../service/http.service";
import { UserService } from "../service/user.service";
import { UserBean } from "../service/user.bean";
import { HttpModule } from "@angular/http";
import { CityPickerModule } from  "ionic2-city-picker";
import { DatePipe } from '@angular/common';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HomenavgComponent } from '../components/homenavg/homenavg';

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
    LogonPage,
    LoginSelectPage,
    LoginPage,
    HomenavgComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {  
        backButtonText: '返回' // 配置返回按钮的文字  
        // ,backButtonIcon: 'arrow-dropleft-circle' // 配置返回按钮的图标  
    }),
    HttpModule,
    IonicStorageModule.forRoot(),
    CityPickerModule
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
    LogonPage,
    LoginSelectPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    UserService,
    UserBean,
    CodeBean,
    DatePipe
  ]
})
export class AppModule {}
