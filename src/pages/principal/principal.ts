import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';


// Import Pages
import {
		LoginPage,
		RegistroPage
	} from '../index.paginas';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private menuCtrl: MenuController) {
    // Label to disabled menu
    this.menuCtrl.enable(false);
  }

  /**
  * Method to go to the login window
  */
  goLogin(){
  	// The function push is for go to other window
  	this.navCtrl.push( LoginPage );
  }

  /**
  * Method to go to the RegistroPage window
  */
  goCheckIn(){
  	this.navCtrl.push( RegistroPage );
  }

}
