import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementosLista: string[] = [];
  newElement: string;
  contador: number = 0;

  add(): void {
    this.elementosLista.push(this.newElement);
    this.newElement = '';
  }

  borrarElementoLista(indice: number): void {
    this.elementosLista.splice(indice, 1);
  }
}
