import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddNinjaPage} from "../add-ninja/add-ninja";
import {NinjaListPage} from "../ninja-list/ninja-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

     addNinjaOnClick() {
        console.log("Add Ninja Clicked.");
        this.navCtrl.push(AddNinjaPage);
    }

    listNinjaOnClick() {
      console.log("List Ninja Clicked.");
      this.navCtrl.push(NinjaListPage);
    }
}
