import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { AuthPage } from './../pages/auth/auth';
import { OptionsPage } from './../pages/options/options';
import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform,  NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  TabsPage:any=TabsPage;
  optionsPage:any=OptionsPage;
  authPage:any= AuthPage;
  isAuth:boolean;

  @ViewChild('content') content: NavController;

  constructor(platform: Platform, statusBar: StatusBar,
     splashScreen: SplashScreen, public menuCtrl:MenuController) {
    platform.ready().then(() => {
      
      let config = {
        apiKey: "AIzaSyCvWmicr9QS7gFbtqdspqSw56_PFNfHmyk",
        authDomain: "appareilappocr.firebaseapp.com",
        databaseURL: "https://appareilappocr.firebaseio.com",
        projectId: "appareilappocr",
        storageBucket: "",
        messagingSenderId: "573475604079"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user)=>
        {
          if(user)
          {
            this.isAuth=true;
            this.content.setRoot(TabsPage);
          }else
          {
            this.isAuth=false;
            this.content.setRoot(AuthPage,{mode:'connect'});
          }
        })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onNavigate(page:any,data?:{})
  {
    this.content.setRoot(page,data? data: null);
    this.menuCtrl.close();
  }

  onDisconnect()
  {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

