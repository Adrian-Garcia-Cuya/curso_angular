import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characer.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // public onDelete = new EventEmitter<number>(); //Otra forma de tiparlo

  @Input()
  public characterList: Character[] = [

  ];

  onDeleteCharacter( id: string ): void {
    this.onDelete.emit( id );
  }
}
