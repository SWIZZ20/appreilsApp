import { AppareilFormPage } from './../appareil-form/appareil-form';
import { AppareilServiceProvider } from './../../providers/appareil-service/appareil-service';
import { Appareils } from './../../Models/Appareils';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicPage, NavParams, ModalController, MenuController, NavController, ToastController, LoadingController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Subscription } from 'rxjs/Subscription';

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
export class AppareilsPage implements OnInit,OnDestroy{
  

  appareilList:Appareils[];
  appreilSubscription:Subscription;

  constructor( public navParams: NavParams,private modalCtrl:ModalController,
    private serviceAppareil:AppareilServiceProvider, 
    private menuCtrl:MenuController, private navCtrl:NavController, public toastCtrl:ToastController, public loadCtrl:LoadingController) {
     
  }

  onGetData()
  {
    let loading= this.loadCtrl.create(
    {
      content:'Recuperation en cours...',
      duration:3000
    });
    loading.present();
    this.serviceAppareil.getData().then(()=>
    {
      let toast=this.toastCtrl.create({
        message:'Données recupérées!',
        duration:3000,
        position:'bottom'
      });
      toast.present();
    }).then((error)=>
    {
      let toast=this.toastCtrl.create({
        message: ''+error,
        duration:3000,
        position:'bottom'
      });
      toast.present();
    });
  }

  onSaveList()
  {
    let loading= this.loadCtrl.create(
    {
      content:'Sauvegarde en cours...',
    });
    loading.present();
    this.serviceAppareil.saveData().then(()=>
    {
      loading.dismiss();
      let toast=this.toastCtrl.create({
        message:'Données sauvegardées!',
        duration:3000,
        position:'bottom'
      });
      toast.present();
    }).then((error)=>
    {
      loading.dismiss();
      let toast=this.toastCtrl.create({
        message: ''+error,
        duration:3000,
        position:'bottom'
      });
      toast.present();
    });
  }

  ngOnInit()
  {
    this.appreilSubscription=this.serviceAppareil.appareils$.subscribe((appreil:Appareils[])=>
    {
      this.appareilList=appreil;
    });
    this.serviceAppareil.emitAppareils();
  }

  ngOnDestroy(): void {
    this.appreilSubscription.unsubscribe();
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
