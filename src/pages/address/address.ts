import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressService } from './address.service';

/**
 * Generated class for the AddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//Test commit from win

 //Test commit from mac
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
  providers: [AddressService]
})

export class AddressPage {
  cityData: any[]; //城市数据
  cityName: string = '北京市 北京市 东城区'; //初始化城市名
  code: string; //城市编码
  constructor(
    public navCtrl: NavController,
    public cityPickerSev: AddressService,
    public navParams: NavParams
  ) {

    this.setCityPickerData();
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
