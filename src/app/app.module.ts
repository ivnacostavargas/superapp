import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Declaracion de paginas
import { HomePage } from '../pages/home/home';
import {
    LoginPage,
    RegistroPage,
    PrincipalPage,
    TabsPage,
    EventosPage,
    EventDetailPage,
    PerfilUserPage,
    VotacionesPage,
    RankingDjPage,
    AboutOfPage
  } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    PrincipalPage,
    TabsPage,
    EventosPage,
    EventDetailPage,
    PerfilUserPage,
    VotacionesPage,
    RankingDjPage,
    AboutOfPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    PrincipalPage,
    TabsPage,
    EventosPage,
    EventDetailPage,
    PerfilUserPage,
    VotacionesPage,
    RankingDjPage,
    AboutOfPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
