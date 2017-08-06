import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LogonPage } from '../logon/logon';

/**
 * Generated class for the LoginSelectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-select',
  templateUrl: 'login-select.html',
})
export class LoginSelectPage {
  private bk_css:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      screen.width > screen.height ? this.bk_css = "bk_w" : this.bk_css = "bk_h";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSelectPage');
  }

  public login(): void {
    // this.navCtrl.setRoot(LogonPage);
    // this.navCtrl.push(LogonPage, { IndustrylistCallBack: this.IndustrylistCallBack });
    this.navCtrl.push(LogonPage);
  }

}
