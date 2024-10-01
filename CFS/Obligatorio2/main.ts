// Crear proyecto NPM
// • Subir proyecto a GitHub
// • Implementar Registro Automotor visto
// anteriormente, pero agregando soporte de
// motos y camiones usando herencia
// • Definir tarea NPM para compilar y correr los
// archivos necesarios
// • Enviar por Slack el link al repositorio de
// GitHub

//importo los archivos necesarios
//import * as rls from "readline-sync";
import { Auto, tiposDeAutos } from "./auto";
import { Persona } from "./personas";
import { Moto } from "./moto";
import { Camion } from "./camion";

//creo personas ficticias
let persona1:Persona = new Persona("nombre1", "apellido1", 200);
let persona2:Persona = new Persona("nombre2", "apellido2", 201);
let persona3:Persona = new Persona("nombre3", "apellido3", 202);
export let listadoPersonas:Persona[]=[persona1,persona2,persona3]
//creo un vehículo de cada tipo
let auto1 = new Auto("fiat", "mobi", 2017, listadoPersonas[0],"AAA000",0,0,);
let moto1 = new Moto("zanella", "sol",2000, listadoPersonas[1], "AAA001", 50);
let camion1 = new Camion("volvo", "fh", 2022, listadoPersonas[2], "AAA002",0);

let opcion: number = 0;

console.log(auto1, moto1, camion1);