import { Restaurante } from "./Restaurante.dto";
import { Tipo } from "./Tipo.dto";

export class Platillo{
    id: number;
    nombre: string;
    tamano: string;
    precio: number;
    restaurante: Restaurante;
    tipo: Tipo;

    
    constructor(){}
}