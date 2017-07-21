import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import {Http, Response, Headers, RequestOptions, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/toPromise';

import { HomeService } from "./home.service";
// import { HttpService } from "../../servers/http.server";
// var development = require('./config/development');

// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  // ,providers: [HelloService, Http, HTTP_PROVIDERS]
  // ,providers: [HelloService, Http]
  ,providers: [HomeService]
})
export class HomePage {
  // private srch_key:string = "";
  private url: string;
  private sr_items: any;
  private headers: any;
  private options: any;
  // private http:Http;

  filterargs = {name: '02'};
  constructor(public navCtrl: NavController, public myhttp:HomeService, public navParams: NavParams) {
      this.url = "http://localhost:8080/api/getsrlist"
      this.setSrch("");
  }

  public itemSelected(item) : void
  {
      console.log(item);
  }
//   this.sr_items = [{name:"aaa", val:"01"},{name:"bbb", val:"02"},{name:"ccc", val:"03"}];
  public setSrch(value : string) : void
  {
    // return this.search_txt;
    console.log("the key is:" + value);
    console.log("the url is:" + this.url + value);
    
    this.myhttp.getItem(this.url + value).then((json) => {
        this.sr_items = json;
    });

    // this.myhttp.getItem(this.url + value).then(this.sr_items => function(json){
    //     console.log("@@@@@@@@@@@@@ json json:" + JSON.parse(JSON.stringify(json)));
    //     return json;
    // });

    // this.headers = new Headers({'Content-Type': 'application/json'});
    // this.options = new RequestOptions({headers: this.headers});
    // // get store/commodity/usersetting/others... datas
    // this.http.get((this.url + value)),{headers: new Headers({ "Accept": "application/json" })})
    //             .toPromise()
    //             .then(res => res.json())
    //             .catch(this.handleError);
    // }

  }

//   ionViewDidLoad() {
      // console.log('ionViewDidLoad HelloPage');
//   }

}
