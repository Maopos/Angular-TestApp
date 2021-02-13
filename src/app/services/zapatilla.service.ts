import {Injectable  } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Nike', 140000, 'Triax', 'Azul', true),
            new Zapatilla('Adidas', 160000, 'Kanadian', 'Gris', true),
            new Zapatilla('UnderArmour', 220000, 'Valzets', 'Negro', false),
            new Zapatilla('Fila', 340000, 'Jordan', 'Blanco', true),
            new Zapatilla('Nike', 140000, 'Triax', 'Azul', true),
            new Zapatilla('Adidas', 160000, 'Kanadian', 'Gris', true),
            new Zapatilla('UnderArmour', 220000, 'Valzets', 'Negro', false),
            new Zapatilla('Fila', 340000, 'Jordan', 'Blanco', true)
        ];
    }

    getTexto(){
        return 'Hola Mundo';
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }
}