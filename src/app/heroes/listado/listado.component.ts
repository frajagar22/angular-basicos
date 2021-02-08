import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Hulk', 'Capitan America', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): string {
   this.heroeBorrado = this.heroes.shift() || '';
   return this.heroeBorrado;
  }
}
