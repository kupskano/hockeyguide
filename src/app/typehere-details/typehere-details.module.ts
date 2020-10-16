import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypehereDetailsPageRoutingModule } from './typehere-details-routing.module';

import { TypehereDetailsPage } from './typehere-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypehereDetailsPageRoutingModule
  ],
  declarations: [TypehereDetailsPage]
})
export class TypehereDetailsPageModule {}
