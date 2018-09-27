import { Component, OnInit } from '@angular/core';
import { DeckcardsService } from '../../clases/deckcards.service';
import { MyCustomDeckofApiType } from '../../clases/deckinterface';
import { cardsInterface } from '../../clases/cardsInterface';

@Component({
  selector: 'app-mayor-omenor',
  templateUrl: './mayor-omenor.component.html',
  styleUrls: ['./mayor-omenor.component.css'],
  providers:[DeckcardsService]
})
export class CardGameComponent implements OnInit {
public actionsBtn=true;
public loader=true;
public lowCards = ["ACE",2,3,4,5,6,7];
public highCards = [8,9,10,"JACK","QUEEN","KING"];
public BlankCard = "../assets/imagenes/hideCard.png";
public deck_id:string;
public totalcurd:number;
Dcards=[];
  constructor(private deckcardsService:DeckcardsService) { }

  ngOnInit() {
  	this.deckcardsService.startGame().then((decks:MyCustomDeckofApiType) => {
        
           this.drawCards(decks.deck_id);
        });
  }
drawCards(deck_id){
	      this.deck_id=deck_id;

          this.deckcardsService.drawCard(deck_id).then((cds:cardsInterface) => {
          	this.totalcurd=cds.remaining;
          	this.message="";
          cds.cards[0].viewCard=false;
          cds.cards[1].viewCard=false;
          cds.cards[0].BlankCard=this.BlankCard;
          cds.cards[1].BlankCard=this.BlankCard;
          this.Dcards=cds.cards;
           this.loader=false;
           
}
        );
}
checkHighLow(target){
    var low=true;
	for(var i=0;i<this.highCards.length;i++){
if(this.highCards[i]==target){
     low=false;
	
}

	}
	return low;
}
 message="";
  fcard=false;
 scard=false;
  changeCard(dcards,type){


if(dcards[0].viewCard===false){
dcards[0].viewCard=true;
dcards[0].BlankCard=dcards[0].images.png;
this.Dcards=dcards;
if(type=="H" && this.checkHighLow(dcards[0].value)==false){
	this.message="You are right";
	this.fcard=true;
}
if(type=="H" && this.checkHighLow(dcards[0].value)==true){
	this.message="You are Wrong";
	this.fcard=false;
}
if(type=="L" && this.checkHighLow(dcards[0].value)==false){
	this.message="You are Wrong";
	this.fcard=false;
}
if(type=="L" && this.checkHighLow(dcards[0].value)==true){
	this.message="You are right";
	this.fcard=true;
}
return;

}
if(dcards[1].viewCard===false){
dcards[1].viewCard=true;
dcards[1].BlankCard=dcards[1].images.png;
this.Dcards=dcards;

if(type=="H" && this.checkHighLow(dcards[1].value)==false){
	this.message="You are right";
	this.scard=true;
}
if(type=="H" && this.checkHighLow(dcards[1].value)==true){
	this.message="You are Wrong";
	this.scard=false;
}
if(type=="L" && this.checkHighLow(dcards[1].value)==false){
	this.message="You are Wrong";
	this.scard=false;
}
if(type=="L" && this.checkHighLow(dcards[1].value)==true){
	this.message="You are right";
	this.scard=true;
}

if(this.fcard==true && this.scard==true){
	this.message="You Win";
	this.loader=true;
	this.drawCards(this.deck_id);

}
else{
	this.actionsBtn=false;
	this.message="Better Luck Next Time";
	
}
}
           
}
onSelectHigh(){
	this.changeCard(this.Dcards,"H");

}
onSelectLow(){
this.changeCard(this.Dcards,"L");
}
onSelectTryAgain(){
	this.actionsBtn=true;
	this.message="";
	this.loader=true;
 this.deckcardsService.newGame(this.deck_id).then((decks:MyCustomDeckofApiType) => {
          	this.drawCards(decks.deck_id);
           
           
}
        );
}
}
