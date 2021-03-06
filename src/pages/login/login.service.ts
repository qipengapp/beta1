import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
import { HttpService } from "../../service/http.service";
import { UserService } from "../../service/user.service";
import { UserBean } from "../../service/user.bean";
import { CodeBean } from "./code.bean";
import { NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/toPromise';
// import { Observable } from "rxjs";
// import { JWT } from 'jsonwebtoken';

@Injectable()
export class LoginService
{
    private host:string;
    constructor( public myhttp:HttpService, private datePipe: DatePipe, public b_code: CodeBean, public localStorage: Storage) {
        // public jwt: JWT,
        // public user:UserBean
        this.host = "http://localhost:8080";
    }

    private GetNewIdCode() : void
    {
        let code = Math.random().toString();
        code = code.substr(code.length - 5);
        this.b_code.setIdCode(code);
        this.b_code.setIdDate(new Date());
    }

    public SendIdCode() : void
    {
        this.GetNewIdCode();
        console.log("################################# getIdCode: " + this.b_code.getIdCode());

        // @预留发送短信代码调用区域
    }

    public reg(input_phone : string) : any
    {
        let loginDate = new Date();
        let date_str = this.datePipe.transform(loginDate, "yyyy-MM-dd HH:mm:ss");
        let url = this.host + "/api/reguser";
        let user = {"userPhone": input_phone, "loginDate": date_str};

        console.log("##### date_str:" + date_str);

        this.myhttp.get(url, { search: user}).then((json) => {
            console.log("##### function -> reg -> json:" + json);
            // user = json;

            // console.log("****************** 5 xxxxxx:" + JSON.stringify(json));
        });
    }

    public SendLoginStatus(input_phone : string) : boolean
    {
        // @登记用户的登录
        let loginDate = new Date();
        let user:any = [];
        let url = this.host + "/api/getuser";
        // this.user.setUserPhone(input_phone);
        // this.user.setLoginDate(loginDate);
        // localStorage.setItem("userPhone", input_phone);
        // localStorage.setItem("loginDate", loginDate.toDateString());
    
        user = {"userPhone": input_phone, "loginDate": loginDate.toDateString()}
        console.log("******************** 3 url:" + url);

        // this.myhttp.get(url, JSON.stringify(user)).then((json) => {
        this.myhttp.get(url, { search: user}).then((json) => {
            console.log("****************** 3 json:" + json);
            user = json;
            localStorage.setItem("USER", user);

            console.log("****************** 5 xxxxxx:" + JSON.stringify(json));
        });

        // this.navCtrl.push(IndustrylistPage, {IndustrylistCallBack: this.IndustrylistCallBack});
        // console.log("########## SendLoginStatus loginDate:" + loginDate.toDateString());

        // console.log("########## SendLoginStatus userPhone:" + localStorage.getItem("USER"));

        // console.log("########## SendLoginStatus loginDate:" + localStorage.getItem("loginDate"));
        // console.log("########## SendLoginStatus loginDate:" + localStorage.getItem("userPhone"));
        return false;
    }

    public CheckIdCode(input_code : string) : string
    {
        let minutes = 1000 * 60;
        let checkDateNow = new Date();
        let flr_mut = checkDateNow.getTime()/minutes - this.b_code.getIdDate().getTime()/minutes;

        // @判断验证码是否相等
        if(input_code != this.b_code.getIdCode())
        {
            return "CEK-001";
        }

        // @准备开始计算差的时间是几分钟
        if(flr_mut > 3)
        {
            console.log("########### checkDateNow - getIdDate: " + flr_mut);
            return "CEK-002";
        }

        return "CEK-OK";
    }

//   getItem(url)
//   {
//       console.log("////////////// HelloService getItem url:" + url);
//       return this.myhttp.get(url, null);
//   }
}