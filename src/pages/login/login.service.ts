import { Injectable } from '@angular/core';
import { HttpService } from "../../service/http.service";
import { UserService } from "../../service/user.service";
import { CodeBean } from "./code.bean";

@Injectable()
export class LoginService
{
    constructor(public myhttp:HttpService, public user:UserService, public b_code: CodeBean) {
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
        let checkDt = 2;
        console.log("########## SendLoginStatus input_code:" + input_code);
        console.log("########## SendLoginStatus getIdCode:" + this.b_code.getIdCode());
        return false;
    }

    public CheckIdCode(input_code : string) : string
    {
        let checkDateNow = new Date();
        let flr_mut = checkDateNow.getTime() - this.b_code.getIdDate().getTime();
        if(input_code != this.b_code.getIdCode())
        {
            return "CEK-001";
        }

        // @准备开始计算差的时间是几分钟
        console.log("########### this.b_code.getIdDate(): " + this.b_code.getIdDate());
        console.log("########### checkDateNow: " + checkDateNow);
        console.log("########### checkDateNow - getIdDate: " + flr_mut);

        return "CEK-OK";
    }

//   getItem(url)
//   {
//       console.log("////////////// HelloService getItem url:" + url);
//       return this.myhttp.get(url, null);
//   }
}