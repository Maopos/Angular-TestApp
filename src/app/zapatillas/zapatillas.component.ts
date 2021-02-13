import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public miMarca: string;
    

        constructor(private _zapatillaService: ZapatillaService) {
            this.titulo = 'Componente de zapatillas.';            
            this.marcas = [];
            this.color = '';
            this.miMarca = '';
            this.zapatillas = _zapatillaService.getZapatillas()
            
            
            
        }
        
        ngOnInit(){
            console.log(this.zapatillas);
            this.getMarcas();
            this.zapatillas;
        }

        getMarcas(){
            this.zapatillas.forEach((zapatilla) =>{

                if (this.marcas.indexOf(zapatilla.marca) < 0) {
                    
                    this.marcas.push(zapatilla.marca);
                }                  
                   
            });

            console.log(this.marcas);
            
        };

        getMarca(){
             alert(this.miMarca);
        }

         addMarca(){
            this.marcas.push(this.miMarca);
        }
            
        

        borrarMarca(index: string){
            for (let i = 0; i < this.marcas.length; i++) {
                if (index == this.marcas[i]) {
                     this.marcas.splice(i, 1); // * Borra 1 elemento apartir del indice i.
                     
                }                
            }
        }

        onBlur(){
            console.log('Has salido del input.');            
        }

        mostrarPalabra(){
            this.marcas.push(this.miMarca);
        }        

}