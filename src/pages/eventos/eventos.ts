import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import pages
import { EventDetailPage } from '../index.paginas';

@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams) {
  }

  /**
  * Method for go to EventDetailPage
  */
  eventDetail(){
  	this.navCtrl.push( EventDetailPage );
  }

}
