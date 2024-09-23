import{Personas} from "./personas"

export class Vehiculos {
    private tipo:string;
    private marca:string;
    private modelo:string;
    private año:number;
    private dueño:Personas;

    constructor(tipo:string, marca:string, modelo:string, año:number, dueño:Personas){
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
    getDueño():Personas{
        return this.dueño;
    }
}
// armo un listado ficticio de 3 autos, 3 motos y 3 camiones

//creo personas ficticias
let persona1:Personas = new Personas("nombre1", "apellido1", 200);
let persona2:Personas = new Personas("nombre2", "apellido2", 30000002);
let persona3:Personas = new Personas("nombre3", "apellido3", 30000003);

export let tipos:string[]=["auto", "camion", "moto"];
let vehiculo1:Vehiculos = new Vehiculos(tipos[0], "fiat", "mobi", 2017, persona1);
let vehiculo2:Vehiculos = new Vehiculos(tipos[0], "chevrolet", "cruze", 2010, persona2);
let vehiculo3:Vehiculos = new Vehiculos(tipos[0], "ford", "falcon", 1987, persona1);

let vehiculo4:Vehiculos = new Vehiculos(tipos[1], "volvo", "fh", 2022, persona1);
let vehiculo5:Vehiculos = new Vehiculos(tipos[1], "iveco", "tector", 2012, persona2);
let vehiculo6:Vehiculos = new Vehiculos(tipos[1], "scania", "113", 2000, persona2);

let vehiculo7:Vehiculos = new Vehiculos(tipos[2], "honda", "tornado", 2019, persona1);
let vehiculo8:Vehiculos = new Vehiculos(tipos[2], "suzuki", "150", 2010, persona3);
let vehiculo9:Vehiculos = new Vehiculos(tipos[2], "zanella", "50cc", 1996, persona3);

export let listadoPersonas:Personas[]=[persona1,persona2,persona3];
export let listadoVehiculos:Vehiculos[]=[vehiculo1,vehiculo2,vehiculo3,vehiculo4,vehiculo5,vehiculo6,vehiculo7,vehiculo8,vehiculo9];
