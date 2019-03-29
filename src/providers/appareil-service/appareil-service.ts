import { Injectable } from '@angular/core';
import { Appareils } from '../../Models/appareils';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot=firebase.database.DataSnapshot;


@Injectable()
export class AppareilServiceProvider  {

  appareils$ = new Subject<Appareils[]>();

  appareilsList:Appareils[]=[
    {
      name: 'Machine à laver',
      description: [
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consommation: 173 kWh/an'
      ],
      isOn:true,
      startTime:'',
      endTime:''
    },
    {
      name: 'Télévision',
      description: [
        'Dimensions: 40 pouces',
        'Consommation: 22 kWh/an'
      ],
      isOn:true,
      startTime:'',
      endTime:''
    },
    {
      name: 'Ordinateur',
      description: [
        'Marque: fait maison',
        'Consommation: 500 kWh/an'
      ],
      isOn:false,
      startTime:'',
      endTime:''
    }
  ];

  constructor() {
    console.log('Hello AppareilServiceProvider Provider');
  }

  addAppareil(appareil:Appareils)
  {
    this.appareilsList.push(appareil);
    this.emitAppareils();
  }

  emitAppareils() {
    this.appareils$.next(this.appareilsList);
  }

  saveData()
  {
    return new Promise((resolve,rejet)=>
    {
      firebase.database().ref('appreils').set(this.appareilsList).then((data: DataSnapshot)=>
      {
        resolve(data);
      }).catch((error)=>{
        rejet(error);
      });
    });
  }

  getData()
  {
    return new Promise((resolve,rejet)=>
    {
      firebase.database().ref('appareils').once('value').then((data:DataSnapshot)=>
      {
        this.appareilsList=data.val();
        this.emitAppareils();
        resolve("données récupérée!");
      }).then((error)=>{
        rejet(error);
      })
    })

  }

}
