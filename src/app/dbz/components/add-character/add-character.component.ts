import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  // Emitir al padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    console.log(this.character);

    // Validación de que el campo no venga vacío
    if (this.character.name.length === 0) return;

    // Emviar la información al componente padre
    this.onNewCharacter.emit(this.character);

    // Reiniciar los campos del formulario
    /* this.character.name = "";
    this.character.power = 0; */
  }

}
