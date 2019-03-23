import { AppareilFormPage } from './../pages/appareil-form/appareil-form';
import { OptionsPage } from './../pages/options/options';
import { TabsPage } from './../pages/tabs/tabs';
import { SettingsPage } from './../pages/settings/settings';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppareilsPage } from '../pages/appareils/appareils';
import { SingleAppareilPage } from '../pages/appareils/single-appareil/single-appareil';
import { AppareilServiceProvider } from '../providers/appareil-service/appareil-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppareilsPage,
    SettingsPage,
    SingleAppareilPage,
    TabsPage,
    OptionsPage,
    AppareilFormPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    AppareilFormPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppareilServiceProvider
  ]
})
export class AppModule {}
