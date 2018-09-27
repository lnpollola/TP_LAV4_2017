import { Injectable, Input} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeckcardsService 
{
  constructor(private http:Http) { }

  public cantNumeros:number = 2;

  newGame(deckId)
  {
    return this.http.get("https://deckofcardsapi.com/api/deck/"+ deckId + "/shuffle/").map(res => res.json())
    .toPromise();
  }

  drawCard(deckId)
  {
	  return this.http.get("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count="+this.cantNumeros).map(res => res.json())
    .toPromise();
  }


  startGame()
  {
    return this.http.get("https://deckofcardsapi.com/api/deck/new/shuffle/").map(res => res.json())
    .toPromise();
  }

}
