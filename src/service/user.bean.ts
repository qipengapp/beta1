import {Injectable} from '@angular/core';

@Injectable()
export class UserBean {
  private userId: string;
  private userPhone: string;
  private UserToken: string;
  private loginDate: Date;

  constructor() {
  }

  public getUserId() : string {
      return this.userId;
  }

  public setUserId(Id: string) {
      this.userId = Id;
  }

  public getUserPhone() : string {
      return this.userPhone;
  }

  public setUserPhone(Phone: string) {
      this.userPhone = Phone;
  }

  public getUserToken() : string {
      return this.UserToken;
  }

  public setUserToken(Token: string) {
      this.UserToken = Token;
  }

  public getLoginDate() : Date {
      return this.loginDate;
  }

  public setLoginDate(logDt: Date) {
      this.loginDate = logDt;
  }
}