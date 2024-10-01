import { Persona } from "./personas";
import { Vehiculo } from "./vehiculos";

export let tiposDeCamion:string[] = ["carga", "refrigerado", "cisterna", "plataforma", "grua", "tolva"];

export class Camion extends Vehiculo{
    
    private tipo:string;
    public constructor(marca:string, modelo:string, año:number, dueño:Persona, patente:string, tipo:number){
        super(marca, modelo, año, dueño, patente)
        this.tipo = tiposDeCamion[tipo];

    }

    getTipo(){
        return this.tipo;
    }
}