import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    // esta información es por default, en caso de que el componente
    // padre no envíe nada.
    {
      name: 'Tunks',
      power: 10
    }
  ];

  @Output()// Enviará información al componente padre
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if(!id) return;
    console.log(id);

    this.onDelete.emit(id);
  }

}
