import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypehereDetailsPage } from './typehere-details.page';

const routes: Routes = [
  {
    path: '',
    component: TypehereDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypehereDetailsPageRoutingModule {}
