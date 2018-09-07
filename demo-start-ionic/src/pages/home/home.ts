import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyprofilePage } from '../myprofile/myprofile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  model:any = { };
  constructor(public navCtrl: NavController) {
  }

  navigate(){
    this.navCtrl.push(MyprofilePage, this.model)
  }

}
