import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '@firebase/util';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  
})
export class LoginPageModule {
  constructor(
    
    public afAuth: AngularFireAuth,
    public afDatabase: AngularFireDatabase,
    
  
  ) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((response)=>{
      console.log('resultado login google:', response);
      
      const userRef = this.afDatabase.list('users');
  
      userRef.update(response.user.uid, 
        {
          userId: response.user.uid, 
          displayName: response.user.displayName,
          photoURL: response.user.photoURL
        });
      //userRef.push({userId: xx.user.uid, displayName: xx.user.displayName}).then((xx)=>{
      //});
      
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}






