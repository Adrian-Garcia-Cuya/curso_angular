import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero( value: string ): void {
    this.name = value;
  }

  changeAge( value: number ): void {
    this.age = value;
  }

  resetForm(): void {
    // this.name = 'iron man';
    this.age = 45;
    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Hola desde angular</h1>';
    });
  }
}
