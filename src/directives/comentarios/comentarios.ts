import { Directive } from '@angular/core';
import { CardsPage as CP } from '../../pages/cards/cards';

/**
 * Generated class for the ComentariosDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[comentarios]' // Attribute selector
})
export class ComentariosDirective {
  cardId: any;
  cardUID: any;

  constructor(
    public CP : CP,
  ) {
    console.log('Hello ComentariosDirective Directive');
    this.cardId = this.CP.cardsRef.cardId;
    this.cardUID =this.CP.comentsRef.cardUID;
  }

  solo(){
    this.CP.addComent(this.cardId, this.cardUID);


  }

  

}
