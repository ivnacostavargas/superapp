import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Importacion de Paginas
import { HomePage } from '../pages/home/home';
import {
    PrincipalPage,
    EventosPage,
    PerfilUserPage,
    VotacionesPage,
    RankingDjPage,
    AboutOfPage
  } from '../pages/index.paginas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  // Pages to tabs
  home:any = HomePage;
  eventos:any = EventosPage;
  perfilUser:any = PerfilUserPage;
  votaciones:any = VotacionesPage;
  rankingDJ:any = RankingDjPage;
  aboutOf:any = AboutOfPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // Se ejecuta metodo que valida la session
    this.validaSession();
  }

  /***
  * Metodo para validar si el usuario ya se loggueo y sigue 
  * En session
  */
  validaSession(){
    this.rootPage = PrincipalPage;
  }

  /**
  * Method that change the page
  * in the Menu
  */
  openPage( page:any ){
    this.rootPage = page;
  }

  logout(){
    console.log("Logout...");
  }

}

