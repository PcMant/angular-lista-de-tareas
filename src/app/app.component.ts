import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/** */
export class AppComponent {
  //Propiedadea//
  /** Array que almacena las tareas */
  elementosLista: {tarea: string, estadoItem: string}[] = [];
  /** Póxima tarea a guardar */
  newElement: string;
  /** Contenido para el texto de boton destinado a la visibilidad de tareas */
  BotonVisibilidadTareas: string = 'Ocultar elementos';
  /** Testigo para poder determinar si ocultar o no la lista de tareas */
  testigoVisibilidadTareas: boolean = false;
  estadoItem = 'line-throught';

  //Métodos//
  /**
   * Método que añade tareas a la lista
   */
  add(): void {
    let nuevaTarea = {tarea: this.newElement, estadoItem: 'pending'};
    this.elementosLista.push(nuevaTarea);
    this.newElement = '';
  }

  /**
   * Método que elimina una tarea en concreto según su indice
   */
  borrarElementoLista(indice: number): void {
    this.elementosLista.splice(indice, 1);
  }

  /**
   * Método que elimina todas las tareas
   */
  vaciarElementosLista(): void {
    this.elementosLista.splice(0);
  }

  /**
   * Método para determinar si mostrar o ocultar la lista de tareas
   */
  visibilidadTareas(): void {
    if (
      this.BotonVisibilidadTareas == 'Ocultar elementos' &&
      !this.testigoVisibilidadTareas
    ) {
      this.BotonVisibilidadTareas = 'Mostrar elementos';
      this.testigoVisibilidadTareas = true;
    } else if (
      this.BotonVisibilidadTareas == 'Mostrar elementos' &&
      this.testigoVisibilidadTareas
    ) {
      this.BotonVisibilidadTareas = 'Ocultar elementos';
      this.testigoVisibilidadTareas = false;
    }
  }
    /**
     * @param tarea -
     */
    cambiarEstadoItem(tarea) {
    tarea.estadoItem == 'completed'
      ? (tarea.estadoItem = 'pendiente')
      : (tarea.estadoItem = 'completed');
  }

  /** Cambia el estado de todas las tareas a completadas */
  cambiarEstadoItems(){
    for(let i=0; i<=this.elementosLista.length-1; i++){
      this.elementosLista[i].estadoItem = 'completed';
    }
  }
}
