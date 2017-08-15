import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login'
import { LogonPage } from '../pages/logon/logon'
import { LoginSelectPage } from '../pages/login-select/login-select'

import { Storage } from '@ionic/Storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = WelcomePage;
  // rootPage:any = LogonPage;
  // rootPage:any = TabsPage;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //this.storage.set('AppFristLogin', null);
    });
  }
}
