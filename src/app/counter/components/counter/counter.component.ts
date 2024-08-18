import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Couter: {{ counter }}</h3>

    <button (click)="increaseOrdecrementBy(1)" >+1</button>
    <button (click)="increaseOrdecrementBy(-1)" >-1</button>
    <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseOrdecrementBy( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
