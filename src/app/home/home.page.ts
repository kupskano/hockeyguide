import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private loadingCtroller: LoadingController,
    private router: Router
  ) {}

  redirectWelcome() {
    this.loadingCtroller.create({
      duration:2000,
      message: 'Redirecting please wait...',
      cssClass: 'my-custom-class'
      // backdropDismiss: true to dismiss loading
    }).then((load) => {
      load.present();
      load.onDidDismiss().then(() => {
        this.router.navigate(['/welcome']);
      });
    })
  }

}
