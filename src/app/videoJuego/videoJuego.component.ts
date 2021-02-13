import { Component} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: 'videoJuego.component.html'
   
})
export class VideojuegoComponent {

    public titulo: string;
    public listado: string;

        constructor() {

            this.titulo = 'Componente de videojuegos';
            this.listado = 'Listado de los juegos mas populares.';

            console.log('Se cargo la lista de juegos.');
            
        }
}