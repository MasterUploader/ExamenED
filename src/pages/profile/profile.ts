import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { HomePage } from '../home/home';
import * as firebase from 'firebase/app';
import { extend } from '@firebase/util';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  
})
export class ProfilePage  {
  currentUser: any;
  public person: {name: string, company: string, birthdate?: number};
  dob: any;
  age: any;
  showProfile: boolean;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public afAuth: AngularFireAuth,
    public afDatabase: AngularFireDatabase,
    public alertCtrl: AlertController,
    
  ) {

    this.person = {name: undefined, company: undefined, birthdate: undefined};
    this.dob = undefined;
    
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.currentUser = {uid:user.uid, photoURL: user.photoURL};
      
    });
   
  }


  

  ionViewDidLoad() {
    let person = JSON.parse(localStorage.getItem('PERSON'));
    if (person){
      this.person = person;
      this.age = this.getAge(this.person.birthdate);
      this.dob = new Date(this.person.birthdate).toISOString();
    }
  }

  reset(){
    this.person = {name: null, company: null, birthdate: null};
    this.dob = null;
    this.showProfile = false;
  }

  save(){
    this.person.birthdate = new Date(this.dob).getTime();
    this.person.company = this.person.company;
    this.age = this.getAge(this.person.birthdate);
    this.showProfile = true;
    localStorage.setItem('PERSON', JSON.stringify(this.person, this.age));
    
  }

  getAge(birthdate){
    let currentTime = new Date().getTime();
     return ((currentTime - birthdate)/31556952000).toFixed(0);
  }
  logout() {
    this.afAuth.auth.signOut();
    //this.provider.loggedin = false;
    this.navCtrl.setRoot(HomePage);
   
  }



}
