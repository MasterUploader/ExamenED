import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}
  ionViewDidLoad() {
     console.log('ionViewDidLoad LoginPage');
  }
  /*
  register(){
    
    if(this.user.value == "admin" && this.password.value == "admin"){
      this.navCtrl.push(LoginPage);
    }else{
       let alert = this.alertCtrl.create({
          title: 'Datos incorrectos',
          subTitle: 'Los datos ingresados son incorrectos.',
           buttons: ['OK']

  });
  alert.present();
  
  }
  
  }
  */
  }
