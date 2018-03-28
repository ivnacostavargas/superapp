import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Import pages
import {
		HomePage	
	} from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	// set the root pages for each tab
	tabHome:any = HomePage;

	// Index for the page
	mySelectedIndex: number;

  constructor(public navCtrl: NavController, 
  		public navParams: NavParams) {
  	// Init index
  	this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
