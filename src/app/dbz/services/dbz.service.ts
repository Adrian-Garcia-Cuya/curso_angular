import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/characer.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 7500
    }
  ];

  addCharacter( character: Character): void {
    character.id = uuid();
    this.characters.push( character );
  }

  deleteCharacterById( id: string ): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }
}
