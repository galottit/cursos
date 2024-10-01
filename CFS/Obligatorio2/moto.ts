import { Persona } from "./personas";
import { Vehiculo } from "./vehiculos";

export class Moto extends Vehiculo{
    private cilindrada:number;

    public constructor(marca:string, modelo:string, año:number, dueño:Persona, patente:string, cilindrada:number){
        super(marca, modelo, año, dueño, patente)
        this.cilindrada = cilindrada;

    }

    getTipo(){
        return this.cilindrada;
    }
}