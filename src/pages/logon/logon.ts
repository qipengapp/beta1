import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the LogonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-logon',
  templateUrl: 'logon.html',
})
export class LogonPage {
  private input_pwd:string;
  private input_phone:string;
  private bk_css:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
      // screen.width > screen.height ? this.bk_css = "bk_w" : this.bk_css = "bk_h";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogonPage');
  }

  public showAlert(sub_title, btn_title) : void{
    let alert = this.alertCtrl.create({
      //title: 'New Friend!',
      subTitle: sub_title,
      buttons: [btn_title]
    });
    alert.present();
  }

  public reg(): void {
    this.navCtrl.push(LoginPage);
  }

  public login(): void {
  
    if(this.input_phone == null || this.input_phone == "")
    {
        this.showAlert('请输入手机号码', '确定');
    }
    else if(this.input_pwd == null || this.input_pwd == "")
    {
        this.showAlert('请输入密码', '确定');
    }
    else if(this.input_phone.length != 11)
    {
        this.showAlert('手机号码不是11位数字，请检查！', '确定');
    }
    else if(!(/^1[3-9][0-9]\d{8}$/.test(this.input_phone)))
    {
        this.showAlert('您的手机号格式有误，请检查！', '确定');
    }
      
  }
}