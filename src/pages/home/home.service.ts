import { Injectable } from '@angular/core';
import { HttpService } from "../../service/http.service";

@Injectable()
export class HomeService
{
  constructor(public myhttp:HttpService) {
  }

  getItem(url)
  {
      console.log("////////////// HelloService getItem url:" + url);
      return this.myhttp.get(url, null);
  }
}