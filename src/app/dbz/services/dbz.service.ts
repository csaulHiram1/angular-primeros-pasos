import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Veggeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }


    // Recibe la informacion desde el componente hijo
    console.log("Main page: ", character);

    // Añadir un elemento al arreglo characters
    this.characters.push(newCharacter);


  }
  // Elimina un personaje basado en su posición
  /* onDeleteCharacter(index: number): void {
    console.log("padre: ", index);

    this.characters.splice(index);
  } */

  //Elimina un personaje basado en su uuid
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }




}
