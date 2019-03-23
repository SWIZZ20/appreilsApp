import { AppareilsPage } from './../appareils/appareils';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAppareilsPage()
  {
    this.navCtrl.push(AppareilsPage);
  }

}
