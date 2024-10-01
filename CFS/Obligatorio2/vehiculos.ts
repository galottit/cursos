import{Persona} from "./personas"

export class Vehiculo {
    private marca:string;
    private modelo:string;
    private año:number;
    private dueño:Persona;
    private patente:string; 

    constructor(marca:string, modelo:string, año:number, dueño:Persona, patente:string){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.dueño = dueño;
        this.patente = patente;
    }
    getmarca():string{
        return this.marca;
    }
    getModelo():string{
        return this.modelo;
    }
    getAño():number{
        return this.año;
    }
    getDueño():Persona{
        return this.dueño;
    }
    getPatente():string{
        return this.patente;
    }
    setDueño(dueño:Persona):void{
        this.dueño = dueño;
    }
}
