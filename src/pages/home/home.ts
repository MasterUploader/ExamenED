
//importando Plugins

import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,  Searchbar } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


//Importando Otras Páginas
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'pagehome',
  templateUrl: 'home.html',
})
export class HomePage {
  currentUser :any;
  @ViewChild('searchbar', { read: ElementRef }) searchbarRef: ElementRef;
  @ViewChild('searchbar') searchbarElement: Searchbar;
  search: boolean    = false;
queryText: string;

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


}