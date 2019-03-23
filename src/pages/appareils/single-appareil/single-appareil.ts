import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SingleAppareilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {
  appareil: {
    name: string,
    description: string[]
  };

  constructor( public navParams: NavParams, public viewCtrl:ViewController) {
    
  }

  ngOnInit()
  {
    this.appareil=this.navParams.get('appreil');
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
