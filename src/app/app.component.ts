import { Component } from '@angular/core';
import { configuracion } from "./models/configuracion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
  mostrar_cursos: boolean = true;
  public descripcion1: string;
  public fondo: string;

  constructor() {
    this.title = configuracion.titulo;
    this.descripcion1 = configuracion.descripcion;
    this.fondo = configuracion.color;
  }

  ocultar_cursos(value: any){
    this.mostrar_cursos = value;
  }
}
