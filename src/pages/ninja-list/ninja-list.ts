import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Ninja} from "../../model/ninja";
import {NinjaServiceProvider} from "../../providers/ninja-service/ninja-service";

/**
 * Generated class for the NinjaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ninja-list',
  templateUrl: 'ninja-list.html',
})
export class NinjaListPage {
    ninjas: Ninja[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams , private ninjaService: NinjaServiceProvider) {
        this.getNinja();
    }

     ionViewDidLoad() {
         console.log('ionViewDidLoad NinjaListPage');
     }

     getNinja(){
        this.ninjaService.getNinjas().subscribe(ninjas=>{
            console.log(ninjas);
            this.ninjas = ninjas ;
        });
     }


}
