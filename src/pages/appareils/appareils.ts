import { AppareilFormPage } from './../appareil-form/appareil-form';
import { AppareilServiceProvider } from './../../providers/appareil-service/appareil-service';
import { Appareils } from './../../Models/Appareils';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController, MenuController, NavController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';

/**
 * Generated class for the AppareilsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html',
})
export class AppareilsPage {

  appareilList:Appareils[];

  constructor( public navParams: NavParams,private modalCtrl:ModalController,
    private serviceAppareil:AppareilServiceProvider, 
    private menuCtrl:MenuController, private navCtrl:NavController) {
     
  }

  ionViewWillEnter()
  {
    this.appareilList=this.serviceAppareil.appareilsList.slice();
  }
  onLoadAppareil(i:number)
  {
   let modal= this.modalCtrl.create(SingleAppareilPage,{index:i})
    modal.present();
  }

  onToggleMenu()
  {
    this.menuCtrl.open();
  }

  onNewAppareil()
  {
    this.navCtrl.push(AppareilFormPage);
  }
  
}
