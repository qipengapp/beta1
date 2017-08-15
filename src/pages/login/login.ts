import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginService } from "./login.service";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]  
 })
export class LoginPage {
  public input_code: string;
  public input_phone: string;

  public bt_msg: string;
  public time: number;
  public flag: boolean;
  public err: string;

  private code: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serve: LoginService, public alertCtrl: AlertController) {
    this.bt_msg = "获取验证码";
    this.time = 60;
    this.flag = false;
    this.err = "";
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad LoginPage');
  }

  public showAlert(sub_title, btn_title) : void{
    let alert = this.alertCtrl.create({
      //title: 'New Friend!',
      subTitle: sub_title,
      buttons: [btn_title]
    });
    alert.present();
  }

  // @Colin 处理验证码按钮
  public countSecond() : void{
    this.time-=1;

    if(this.time <= 0){
      this.time = 60;
      this.bt_msg = "重新获取验证码";
      this.flag = true;
    }else{
      this.bt_msg = "(" + this.time + ") 秒后重新获取";
      this.flag = false;
      
      setTimeout(() => {
          this.countSecond();
      }, 1000);
    }
  }

  // @手机号码基本校验
  public checkPhone() : any
  {
      console.log("####### this.phone:" + this.input_phone);

      if(this.input_phone == "" || this.input_phone == null)
      {
          this.err = "请您先填写手机号码！";
          return false;
      }

      if(this.input_phone.length != 11)
      {
          this.err = "手机号码不是11位数字，请检查！";
          return false;
      }

      if(!(/^1[3-9][0-9]\d{8}$/.test(this.input_phone)))
      {
          this.err = "您的手机号格式有误，请检查！";
          return false;
      }
      return true;
  }

  // @校验并获取验证码
  // @设置60秒可以触发一次
  public getPhoneCode() : void {
    this.input_code = "";
    if(this.checkPhone())
    {
        this.time = 60;
        this.bt_msg = "获取验证码";
        this.flag = true;

        this.serve.SendIdCode();
        this.countSecond();
    }
    else
    {
        this.showAlert(this.err, '确定');
    }
  }

  // @验证码基本校验
  public checkCode() : any
  {
      let login_flg = true;
      if(this.input_code == "" || this.input_code == null)
      {
            this.err = "请您先填写验证码！";
            login_flg = false;
      }
      return login_flg;
  }

 // @登录按钮
  public login(): void {
    if(this.checkPhone() && this.checkCode())
    {
        // @校验验证码输入是否正确
        if(this.serve.CheckIdCode(this.input_code) == "CEK-001")
        {
            this.err = "您的验证码输入的不正确！";
            this.showAlert(this.err, '确定');
        }
        else if(this.serve.CheckIdCode(this.input_code) == "CEK-002")
        {
            this.err = "验证码已过期，请重新获取新的验证码！";
            this.showAlert(this.err, '确定');
        }
        else
        {
            // this.serve.SendLoginStatus(this.input_phone);
            // this.showAlert(this.err, '确定');
            this.serve.reg(this.input_phone);
        }
    }
    else
    {
        this.showAlert(this.err, '确定');
    }
  }
}