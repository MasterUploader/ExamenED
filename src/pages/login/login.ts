import { Component, ViewChild, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '@firebase/util';

import {HomePage} from '../home/home'
import {RegisterPage} from '../register/register'; //Página de Registro
import { MainPage } from '../main/main';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;
  currentUser:any;
  
  

	provider = {
		loggedin: false,
		name: '',
		email: '',
		profilePicture: ''
}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private alertCtrl: AlertController
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
     console.log('ionViewDidLoad LoginPage');
  }
  
loginWithEmail(){
  this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
  	.then( response => {
      firebase.auth().setPersistence;
  		this.provider.loggedin = true;
  		this.provider.name = response.displayName;
  		this.provider.email = response.email;
  		this.provider.profilePicture = response.photoURL;
  		console.log('from Email', response);
  		this.showAlert('Success! you\'re logged in by Email');
    	this.navCtrl.setRoot(MainPage, this.provider);
  	})
  	.catch( error => {
  		console.log('got error',error);
  		this.showAlert(error.message);
});

  

}

//Inicio Función de Registro
register(){
  this.navCtrl.push(RegisterPage);

}

//Fin Función de Registro

showAlert(message: string) {
  let alert = this.alertCtrl.create({
    title: 'Info',
    subTitle: message,
    buttons: ['OK']
  });
  alert.present();
}

//Inicia Login Con Gmail
loginWithGmail(){

  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then((response)=>{

      
      this.provider.loggedin = true;
  		this.provider.name = response.user.displayName;
  		this.provider.email = response.user.email;
  		this.provider.profilePicture = response.user.photoURL;
  		console.log('from Google',response);
  		this.showAlert('Success! you\'re logged in by Google');
      this.navCtrl.setRoot(MainPage, this.provider);
      
     console.log('resultado login google:', response);
    
    const userRef = this.afDatabase.list('users');
     

    userRef.update(response.user.uid, 
      {
        userId: response.user.uid, 
        displayName: response.user.displayName,
        photoURL: response.user.photoURL
        })
  	.catch( error => {
      console.log('got error',error);
      this.showAlert(error.message);
      })
    
    
  });
}
//Termina Login con Gmail
//Inicia Login Con Facebook
loginWithFacebook(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  	.then( response => {
  		this.provider.loggedin = true;
  		this.provider.name = response.user.displayName;
  		this.provider.email = response.user.email;
  		this.provider.profilePicture = response.user.photoURL;
  		console.log('from Facebook', response);
  		this.showAlert('Success! you\'re logged in by Facebook');
      this.navCtrl.setRoot(MainPage, this.provider);
      console.log('resultado login google:', response);
    
    const userRef = this.afDatabase.list('users');
     

    userRef.update(response.user.uid, 
      {
        userId: response.user.uid, 
        displayName: response.user.displayName,
        photoURL: response.user.photoURL
        })
  	.catch( error => {
      console.log('got error',error);
      this.showAlert(error.message);
      })
});

}
//Termina Login con Facebook
//Inicia Login con Github
loginWithGithub(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
  	.then( response => {
  		this.provider.loggedin = true;
  		this.provider.name = response.user.displayName;
  		this.provider.email = response.user.email;
  		this.provider.profilePicture = response.user.photoURL;
  		console.log('from Github',response);
  		this.showAlert('Success! you\'re logged in by Github');
      this.navCtrl.setRoot(MainPage, this.provider);
      console.log('resultado login google:', response);
    
    const userRef = this.afDatabase.list('users');
     

    userRef.update(response.user.uid, 
      {
        userId: response.user.uid, 
        displayName: response.user.displayName,
        photoURL: response.user.photoURL
        })
  	.catch( error => {
      console.log('got error',error);
      this.showAlert(error.message);
      })
});

}
//Termina Login con Github
//Inicia Login con Twitter
loginWithTwitter() {
  this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
  .then( response => {
    this.provider.loggedin = true;
    this.provider.name = response.user.displayName;
    this.provider.email = response.user.email;
    this.provider.profilePicture = response.user.photoURL;
    console.log('from Twitter',response);
    this.showAlert('Success! you\'re logged in by Twitter');
    this.navCtrl.setRoot(MainPage, this.provider);
    console.log('resultado login google:', response);
    
    const userRef = this.afDatabase.list('users');
     

    userRef.update(response.user.uid, 
      {
        userId: response.user.uid, 
        displayName: response.user.displayName,
        photoURL: response.user.photoURL
        })
  	.catch( error => {
      console.log('got error',error);
      this.showAlert(error.message);
      })
  });
}
//Finaliza Login con Twitter
// Devuelve la session
get Session(){
  return this.afAuth.authState;
 }


}




