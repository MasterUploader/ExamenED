
//importando Plugins

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//Importando Otras Páginas
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'home-profile',
  templateUrl: 'home.html',
})
export class HomePage {
  currentUser :any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.currentUser = {uid:user.uid, photoURL: user.photoURL};
      this.navCtrl.setRoot(ProfilePage);
      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }



    
login(){
  this.navCtrl.push(LoginPage);

}
register(){
  this.navCtrl.push(RegisterPage);
}
goTo(){
  this.navCtrl.push(ProfilePage);
}
}