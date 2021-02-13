import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
  public inicio: string;
  public nombre: string = '';
  public followers: number = 0;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router

    ) {
      this.inicio = 'ng generate component ...';
     }

  

  ngOnInit(): void {
    console.log('OnInit ejecutado');
    this._route.params.subscribe((params: Params) => {
    this.nombre = params.nombre;
    this.followers = +params.followers;
    console.log(this.nombre);

    if (this.nombre === 'ninguno') {
      this._router.navigate(['/home']);
    }
             
    });
    
  }

  ngDoCheck(){
    console.log('Docheck ejecutado');
  }  

  ngOnDestroy(){
    console.log('ondestroy ejecutado');
  }

cambiarInicio(){
    this.inicio = "'Crear un nuevo componente con ng generate component ...'";
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
