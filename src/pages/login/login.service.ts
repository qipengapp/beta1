import { Injectable } from '@angular/core';
// import { LocalStorage } from '@angular/localStorage';
import { HttpService } from "../../service/http.service";
// import { UserService } from "../../service/user.service";
import { UserBean } from "../../service/user.bean";
import { CodeBean } from "./code.bean";

@Injectable()
export class LoginService
{
    constructor(public myhttp:HttpService, public user:UserBean, public b_code: CodeBean) { //, public localStorage: LocalStorage
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

    public SendLoginStatus(input_code : string, input_phone : string) : boolean
    {
        // @登记用户的登录
        
        console.log("########## SendLoginStatus input_code:" + input_code);
        console.log("########## SendLoginStatus getIdCode:" + this.b_code.getIdCode());
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