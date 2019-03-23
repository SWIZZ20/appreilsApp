import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

  onToggleMenu()
  {
    this.menuCtrl.open();
  }

}
