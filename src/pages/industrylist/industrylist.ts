import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CompinfoPage } from '../../pages/compinfo/compinfo';

/**
 * Generated class for the IndustrylistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-industrylist',
  templateUrl: 'industrylist.html',
})
export class IndustrylistPage {
  IndustrylistCallBack: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.IndustrylistCallBack = this.navParams.get('IndustrylistCallBack');
    console.log(this.IndustrylistCallBack);

    this.items = ['A01-农业','A02-林业','A03-畜牧业','A04-渔业'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndustrylistPage');
  }

  backSelectIndusrty(industry) {
    console.log(industry);
    this.IndustrylistCallBack(industry).then((result) => {
      this.navCtrl.pop();
    }, (err) => {
      console.log(err);
    });
  }
}
