import { AppareilServiceProvider } from './../../../providers/appareil-service/appareil-service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Appareils } from '../../../Models/appareils';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  appareil:Appareils;

  index:number;
  constructor( public navParams: NavParams, public viewCtrl:ViewController
    ,private service: AppareilServiceProvider) {
    
  }

  ngOnInit()
  {
    this.index=this.navParams.get('index');
    this.appareil=this.service.appareilsList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
  onDeleteHours()
  {
    this.appareil.startTime='';
    this.appareil.endTime='';
  }
  onSubmitForm(form:NgForm)
  {
    console.log(form.value);
    this.dismissModal();
  }

  switchOffOrOn()
  {
    this.appareil.isOn=!this.appareil.isOn;
  }

}
