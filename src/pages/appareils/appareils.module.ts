import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppareilsPage } from './appareils';

@NgModule({
  declarations: [
    AppareilsPage,
  ],
  imports: [
    IonicPageModule.forChild(AppareilsPage),
  ],
})
export class AppareilsPageModule {}
