import { Injectable } from '@angular/core';

/*
  Generated class for the TareasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasProvider {


  tareas = []
  tareasArchivadas = []
  archivarTarea(indice) {
    console.log(indice);
    let tarea = this.tareas[indice];
    this.tareasArchivadas.push(tarea);
    console.log(this.tareasArchivadas);
    this.tareas.splice(indice,1);
  }
  constructor() {
    console.log('Hello TareasProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  obtenerTareasArchivadas() {
    return this.tareasArchivadas;
  }
  crearTarea(tarea){
    this.tareas.push(tarea);
  }
  editarTarea(textoTarea, indice){
    this.tareas[indice] = textoTarea;
  }


}
