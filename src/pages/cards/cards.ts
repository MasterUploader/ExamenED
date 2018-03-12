import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  NavParams, 
  Platform, 
  AlertController, 
  ActionSheetController   } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '@firebase/util';




/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  currentUser:any;
  cardsRef:any;
  cards: AngularFireList<any>;
  
  
  coments: AngularFireList<any>;
  comentsRef:any;
 
  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth,
   
    
  ) {
    this.cardsRef = afDatabase.list('Cards');
    this.cards = this.cardsRef.valueChanges();
    this.comentsRef = afDatabase.list('Coments');
    this.coments = this.comentsRef.valueChanges();
    

  
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.currentUser = {uid:user.uid, photoURL: user.photoURL, nombre: user.displayName};
      
    });
    
  }
  //Metodo Agregar tarjeta
  addCard(){
    let prompt = this.alertCtrl.create({
      title: 'Titulo de la Tarjeta',
      message: "Rellene los Datos",
      subTitle:'Contenido',

      
      
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
        },
        {
          name: 'subTitle',
          placeholder: 'Contenido',

        }
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
            const newCardRef = this.cardsRef.push({});

   
            newCardRef.set({
              id: newCardRef.key,
              title: data.title,
              subTitle: data.subTitle,
              nombre: this.currentUser.nombre,
              photo: this.currentUser.photoURL,
              uid: this.currentUser.uid
            });
          }
        }
      ]
    });
    prompt.present();
  }

  //Fin metodo Agregar Tarjeta

  //Inicia Metodo ShowOptions

  showOptions(cardId :string, cardTitle: string, cardSubTitle: string, cardUID: string) {

    console.log(cardId);
    console.log(cardTitle);
    console.log(cardSubTitle);
    console.log(cardUID);
    let actionSheet = this.actionSheetCtrl.create({
      title: '¿Que quieres hacer?',
      buttons: [
        {
          text: 'Borrar Tarjeta',
          role: 'destructive',
          handler: () => {
            this.removeCard(cardId,cardUID);
          }
        },{
          text: 'Agregar Comentario',
          handler: () => {
            this.addComent(cardId, cardUID);
          }


        },
        
        {
          text: 'Actualizar Nombre',
          handler: () => {
            this.updateCard(cardId, cardTitle, cardSubTitle, cardUID);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  //Termina Metodo ShowOptions

  //Inicia Metodo removeCard

  removeCard(cardId: string, cardIdUser: string){
    
    if(this.currentUser.uid == cardIdUser){
      
      this.cardsRef.remove(cardId);

    }else{
      
     let alert = this.alertCtrl.create({
        title: '¡¡¡UUUPPPSSS!!!',
        subTitle: 'No estas autorizado para eliminar la tarjeta',
        
        buttons: ['ok']
      });
      
      alert.present();
    
    }
    
  }
  //Finaliza Metodo removeCard

  //Inicia Metodo updateCard

  updateCard(cardId, CardTitle, cardSubTitle, cardUID){
    if(this.currentUser.uid == cardUID){
      let prompt = this.alertCtrl.create({
        title: 'Nombre de la Tarjeta',
        message: "Actualizar datos de la tarjeta",
        inputs: [
          {
            name: 'title',
            placeholder: 'Title',
            value: CardTitle
          },{
            name: 'subTitle',
            placeholder: 'Contenido'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Click para Cancelar');
            }
          },
          {
            text: 'Guardar',
            handler: data => {
              this.cardsRef.update(cardId, {
                title: data.title, nombre: data.subTitle, lastUpdatedBy: this.currentUser.uid
              });
            }
          }
        ]
      });
      prompt.present();
    } else{
      let alert = this.alertCtrl.create({
        title: '¡¡¡UUUPPPSSS!!!',
        subTitle: 'No estas autorizado para actualizar la tarjeta',
        buttons: ['OK']
      });
      alert.present();

    }

  }
    

  //Finaliza Metodo updateCard

    //Medtodo actualizar Comentario
  
  actualizarComentario(cardId, CardTitle, cardSubTitle, cardUID){
    
      let prompt = this.alertCtrl.create({
        title: 'Comentario',
        message: "Comenta",
        inputs: [
          {
            name: 'title',
            placeholder: 'Comentario',
            
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Click para Cancelar');
            }
          },
          {
            text: 'Guardar',
            handler: data => {
              this.cardsRef.update(cardId, {
                comentario: data.title,  lastUpdatedBy: this.currentUser.uid
              });
            }
          }
        ]
      });
      prompt.present();
    
      

    

  }

  //Metodo Actualizar Comentario

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


 

}

