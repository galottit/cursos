import{Persona} from "./personas"

export class Vehiculo {
    private tipo:string;
    private marca:string;
    private modelo:string;
    private año:number;
    private dueño:Persona;

    constructor(tipo:string, marca:string, modelo:string, año:number, dueño:Persona){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.dueño = dueño;
    }

    getTipo():string{
        return this.tipo;
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
    setDueño(dueño:Persona):void{
        this.dueño = dueño;
    }
}
// armo un listado ficticio de 3 autos, 3 motos y 3 camiones

//creo personas ficticias
let persona1:Persona = new Persona("nombre1", "apellido1", 200);
let persona2:Persona = new Persona("nombre2", "apellido2", 201);
let persona3:Persona = new Persona("nombre3", "apellido3", 202);

export let tipos:string[]=["auto", "camion", "moto"];
let vehiculo1:Vehiculo = new Vehiculo(tipos[0], "fiat", "mobi", 2017, persona1);
let vehiculo2:Vehiculo = new Vehiculo(tipos[0], "chevrolet", "cruze", 2010, persona2);
let vehiculo3:Vehiculo = new Vehiculo(tipos[0], "ford", "falcon", 1987, persona1);

let vehiculo4:Vehiculo = new Vehiculo(tipos[1], "volvo", "fh", 2022, persona1);
let vehiculo5:Vehiculo = new Vehiculo(tipos[1], "iveco", "tector", 2012, persona2);
let vehiculo6:Vehiculo = new Vehiculo(tipos[1], "scania", "113", 2000, persona2);

let vehiculo7:Vehiculo = new Vehiculo(tipos[2], "honda", "tornado", 2019, persona1);
let vehiculo8:Vehiculo = new Vehiculo(tipos[2], "suzuki", "150", 2010, persona3);
let vehiculo9:Vehiculo = new Vehiculo(tipos[2], "zanella", "50cc", 1996, persona3);

export let listadoPersonas:Persona[]=[persona1,persona2,persona3];
export let listadoVehiculos:Vehiculo[]=[vehiculo1,vehiculo2,vehiculo3,vehiculo4,vehiculo5,vehiculo6,vehiculo7,vehiculo8,vehiculo9];
