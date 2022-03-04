import { Restaurante } from "./Restaurante.dto";
import { Tipo } from "./Tipo.dto";

export class Platillo {
    id: number;
    nombre: string;
    tamano: string;
    precio: number;
    restaurante: Restaurante;
    tipo: Tipo;


    constructor(nombre: string, tamano: string, precio: number, restaurante: Restaurante, tipo: Tipo) { 
        this.nombre = nombre;
        this.tamano = tamano;
        this.precio = precio;
        this.restaurante = restaurante;
        this.tipo = tipo;
    }
}