import { Persona } from "./personas";
import { Vehiculo } from "./vehiculos";

export let tiposDeAutos:string[] = ["sedan", "coupe", "convertible", "hatchback", "utilitario", "pickuo", "hibrido"]; // Acá google que tipos de vehículos existen
export let usoDeAuto:string[]= ["PARTICULAR", "PRIVADO", "TAXI", "REMIS", "SERVICIO DE ALQUILER SIN CONDUCTOR", "OFICIAL", "PUBLICO"] // Acá google como se registran los autos en argentina

export class Auto extends Vehiculo{
    private tipo:string;
    private uso:string;

    public constructor(marca:string, modelo:string, año:number, dueño:Persona, patente:string, tipo:number, uso:number){
        super(marca, modelo, año, dueño, patente)
        this.tipo = tiposDeAutos[tipo];
        this.uso = usoDeAuto[uso];
    }

    getTipo(){
        return this.tipo;
    }
    getUso(){
        return this.uso;
    }
    setTipo(tipo:number){
        this.tipo = tiposDeAutos[tipo];
    }
    setUso(uso:number){
        this.uso = usoDeAuto[uso];
    }
}