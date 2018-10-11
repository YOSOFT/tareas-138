import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { TareasProvider } from "../../providers/tareas/tareas";
import { TareasArchivadasPage } from '../tareas-archivadas/tareas-archivadas';
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  tareas = [];
  constructor(
    public navCtrl: NavController,
    private alerta: AlertController,
    private servicioTareas: TareasProvider
    ) {
      this.tareas = servicioTareas.obtenerTareas();
    }
  crearTarea() {
    let alerta = this.alerta.create({
      title: "Crear Tarea",
      message: "crear tarea...",
      inputs: [
        {
          type: "text",
          name: "textoTarea"
        }
      ],
      buttons: [
        { text: "cancelar"},
        { text: "crear",
        handler: (datos) => {
          console.log(datos);
          // this.tareas.push(datos.textoTarea);
          this.servicioTareas.crearTarea(datos.textoTarea);
        }
      }
      ]
    });
    alerta.present();
  }

  irPaginaArchivadas(){
    this.navCtrl.push(TareasArchivadasPage);
  }
}
