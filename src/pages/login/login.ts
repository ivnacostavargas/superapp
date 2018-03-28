import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import Home Page
import { TabsPage } from '../index.paginas';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
  * Method that validates that user´s credentials 
  * are correct and in case they are correct
  * goes to the Home page  
  */
  loginAnalyze(){
  	this.navCtrl.setRoot( TabsPage );
  }

}
