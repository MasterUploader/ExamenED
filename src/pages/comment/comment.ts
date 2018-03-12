import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { CardsPage as cp } from '../cards/cards';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comentsRef: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public cp : cp,
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }
  //Metodo Comentar
addComent(cardId, cardUID){
  let prompt = this.alertCtrl.create({
    title: 'Comentaio',
    message: "Comenta",

    inputs: [
      {
        name: 'title',
        placeholder: 'Comentario'
      },
      
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          const newComentRef = this.comentsRef.push({});
          const newCardRef =this.comentsRef.push({});

           newComentRef.set({
            idC:newComentRef.key,
            comentario: data.title,
            nombreC: this.currentUser.nombre,
            photoC: this.currentUser.photoURL,
            uidC: this.currentUser.uid,
            id: cardId,
          });
          {

          }

          
        }
      }
    ]
  });
  prompt.present();
}

//Fin metodo Comentar

}
