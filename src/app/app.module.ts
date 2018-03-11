import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { WelcomePage } from '../pages/welcome/welcome';
import { User } from '../../src/models/user';
import { CardsPage } from '../pages/cards/cards';
import { MainPage  } from '../pages/main/main';




// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyChhAEKbhc0mKJdTExX3IwYIYNR9DB5GiA",
    authDomain: "examened-c8d5f.firebaseapp.com",
    databaseURL: "https://examened-c8d5f.firebaseio.com",
    projectId: "examened-c8d5f",
    storageBucket: "examened-c8d5f.appspot.com",
    messagingSenderId: "1037283154201"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    WelcomePage,
    CardsPage,
    MainPage
    
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    WelcomePage,
    CardsPage,
    MainPage
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
