import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IndustrylistPage } from '../../pages/industrylist/industrylist';
import { AddressService } from './address.service';

/**
 * Generated class for the CompinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-compinfo',
  templateUrl: 'compinfo.html',
  providers: [AddressService]
})
export class CompinfoPage {
  isSubmitClicked: boolean;
  isReadOnly: boolean;
  CompanyType: string;
  industry = [];

  cityData: any[]; //城市数据
  cityName: string = ''; //初始化城市名
  code: string; //城市编码

  constructor(public navCtrl: NavController, public navParams: NavParams, public cityPickerSev: AddressService, ) {
    this.CompanyType = "syqy";
    this.setCityPickerData();
  }

  ionViewDidLoad() {
    this.isReadOnly = true;
    console.log('ionViewDidLoad CompinfoPage');
  }

  //编辑SR
  editSR() {
    this.isReadOnly = false;
    alert("This is editSR");
  }
  //提交SR
  submitSR() {
    this.isSubmitClicked = true;
    this.isReadOnly = true;
    setTimeout(() => {
      this.isSubmitClicked = false;
      alert("This is submitSR");
    }, 1500);
  }

  pickIndusty() {
    this.navCtrl.push(IndustrylistPage, { IndustrylistCallBack: this.IndustrylistCallBack });
  }

  IndustrylistCallBack = (params) => {
    return new Promise((resolve, reject) => {
      if (typeof (params) != 'undefined') {
        this.industry = params;
        resolve('ok');
      } else {
        reject(Error('error'));
      }
    });
  }

  /**
  * 获取城市数据
  */
  setCityPickerData() {
    this.cityPickerSev.getCitiesData()
      .then(data => {
        this.cityData = data;
      });
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event) {
    console.log(event);
    this.code = event['region'].value;
  }

}
