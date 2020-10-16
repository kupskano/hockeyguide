import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideDetailsPageRoutingModule } from './guide-details-routing.module';

import { GuideDetailsPage } from './guide-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideDetailsPageRoutingModule
  ],
  declarations: [GuideDetailsPage]
})
export class GuideDetailsPageModule {}
