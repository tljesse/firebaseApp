import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyAdqN3Jm2l6i73_5TiH78I-ofivDZTFet0",
  authDomain: "firebaseApp-b8da2.firebaseapp.com",
  databaseURL: "https://firebaseApp-b8da2.firebaseio.com",
  storageBucket: "firebaseApp-b8da2.appspot.com",
  messagingSenderId: "71412294210"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
