//importando Plugins

import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,  Searchbar, ModalController, Platform, ViewController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Storage } from '@ionic/storage';



//Importando Otras Páginas
import { HomePage } from '../home/home';
import { CardsPage } from '../cards/cards';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'main-profile',
  templateUrl: 'main.html'
})

export class MainPage {
  currentUser :any;
  @ViewChild('searchbar', { read: ElementRef }) searchbarRef: ElementRef;
  @ViewChild('searchbar') searchbarElement: Searchbar;
  search: boolean    = false;
  authen: any;
  x:boolean =false;
 queryText: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public storage: Storage) {

      afAuth.authState.subscribe(user => {
        if (!user) {
          this.currentUser = null;
          return;
        }
        this.currentUser = {uid:user.uid, photoURL: user.photoURL};
        
      });

      this.storage.get('at').then(val =>{
        this.authen =val;
        this.x =true;
      })

      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.storage.get('state.login')
  }

  toggleSearch() {
    if (this.search) {
      this.search = false;
    } else {
      this.search = true;
      this.searchbarElement.setFocus();
    }
  }
  
  searchAction(texto: any) {
    let val = texto.target.value;
    //implement search
  }
  logout(){
    this.storage.set('statelogin', null);
    this.afAuth.auth.signOut();
    //this.provider.loggedin = false;
    this.navCtrl.setRoot(HomePage);
  }
  goTo(){
    this.navCtrl.push(CardsPage);
  }
  goToP(){
    this.navCtrl.push(ProfilePage);
  }
}


