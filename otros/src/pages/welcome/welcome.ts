
//importando Plugins

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

//Importando Paginas
import { HomePage } from '../home/home';
import { ProfilePage } from "../profile/profile"; 


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  currentUser :any;

  slides = [
    {
      title: "¡Bienvenido a Nuestra Web!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../imagenmuestra4.png",
    },
    {
      title: "¿Qué es este Sitio?",
      description: "<b>WebChat</b> Es un sitio en el que podras subir tus imagenes favorita y pedir valoraciones.",
      image: "../../img/imagenmuestra5.png",
    },
    {
      title: "Nuetra Comunidad es la Mejor",
      description: "Comienza actualizando tu perfil.",
      image: "../../assets/img/imagenmuestra6.png",
    }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
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
    console.log('ionViewDidLoad WelcomePage');
  }

  //Inicia Función Logout
logout() {
  this.afAuth.auth.signOut();
  //this.provider.loggedin = false;
  this.navCtrl.setRoot(HomePage);
 
}
//Termina Función Logout
//Inicia Función goToProfile
goToProfile(){
  this.navCtrl.setRoot(ProfilePage);

}
}



