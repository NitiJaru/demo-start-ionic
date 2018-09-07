import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {

  model: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient) {
    //console.log(JSON.stringify(this.navParams.data));
    this.get();
  }

  get() {

    this.httpClient.get("https://mrlunch.azurewebsites.net/api/Restaurant/GetRestaurants")
      .subscribe((data: any) => {
        this.model = data;
      }, error => {
        alert(error);
      });
  }

  post() {

    let option = { "headers": { "Content-Type": "application/json" } };
    let model = {}; // model here
    this.httpClient.post("<path url here>", model, option)
      .subscribe((data: any) => {
        // If success
      }, error => {
        // If error
      });
  }

  select(id: any) {
    console.log("1: " + id);
  }
  select2(id: any) {
    console.log("2: " + id);
  }
  select3(id: any) {
    console.log("3: " + id);
  }

}
