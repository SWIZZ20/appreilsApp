import { AppareilsPage } from './../appareils/appareils';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  appareilsPage=AppareilsPage;
  settingsPage=SettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
