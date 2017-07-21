import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public bt_msg: string;
  public time: number;
  public num: number;
  public flag: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bt_msg = "2获取验证码";
    this.time = 60;
    this.flag = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public countSecond() : void{
    this.time-=1;

    console.log("############  1  this.time:" + this.time);
    console.log("############  1  this.time:" + this.bt_msg);
    if(this.time <= 0){
      console.log("############  3  this.time:" + this.time);
      this.time = 60;
      this.bt_msg = "获取验证码";
      this.flag = true;
    }else{
      console.log("############  4  this.time:" + this.time);
      this.bt_msg = "(" + this.time + ") 秒后重新获取";
      this.flag = false;
      // setTimeout("this.countSecond", 1000);
      setTimeout(() => {
          console.log("############  2  this.time:" + this.time);
          console.log("############  2  this.time:" + this.bt_msg);
          this.countSecond();
      }, 1000);
    }
  }

  public getPhoneCode() : void {
    this.time = 60;
    this.bt_msg = "获取验证码";
    this.flag = true;
    this.countSecond();
  }

}
