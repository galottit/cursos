import * as readlineSync from "readline-sync";

let vuelta1 : number = readlineSync.questionInt("Ingrese el tiempo de la 1er vuelta: ");
let vuelta2 : number = readlineSync.questionInt("Ingrese el tiempo de la 2da vuelta: ");
let vuelta3 : number = readlineSync.questionInt("Ingrese el tiempo de la 3er vuelta: ");
let vuelta4 : number = readlineSync.questionInt("Ingrese el tiempo de la 4ta vuelta: ");
let tiempoTotal : number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
let tiempoPromedio : number = tiempoTotal / 4;
console.log("El tiempo total fue de " + tiempoTotal);
console.log("El tiempo promedio por vuelta fue de: " + tiempoPromedio);
