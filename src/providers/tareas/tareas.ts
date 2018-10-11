import { Injectable } from '@angular/core';

/*
  Generated class for the TareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasProvider {
  tareas = []
  constructor() {
    console.log('Hello TareasProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  crearTarea(tarea){
    this.tareas.push(tarea);
  }

}
