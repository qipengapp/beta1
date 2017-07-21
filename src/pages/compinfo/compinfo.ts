import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IndustrylistPage } from '../../pages/industrylist/industrylist';

/**
 * Generated class for the CompinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-compinfo',
  templateUrl: 'compinfo.html',
})
export class CompinfoPage {
  isSubmitClicked: boolean;
  CompanyType: string;
  industry = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.CompanyType = "syqy";
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompinfoPage');
  }

  //编辑SR
  editSR(){
    alert("editSR");
  }
  //提交SR
  submitSR() {
    this.isSubmitClicked = true;
    setTimeout(() => {
      this.isSubmitClicked = false;
      alert("submitSR");
    }, 1500);
  }

  pickIndusty() {
    this.navCtrl.push(IndustrylistPage, {IndustrylistCallBack: this.IndustrylistCallBack});
  }

  IndustrylistCallBack = (params) => {
    return new Promise((resolve,reject)=>{
      if(typeof(params) != 'undefined'){
        this.industry = params;
        resolve('ok');
      }else{
        reject(Error('error'));
      }
    });
  }

}
