import * as rls from "readline-sync";

function aleatorio(cantidad: number, valorMin:number, valorMax:number) : number[]{
    let nuevoArreglo : number[] = new Array(cantidad);
    for (let i: number = 0; i < cantidad; i++) {
        nuevoArreglo[i] = valorMin + (Math.floor(Math.random() * (valorMax - valorMin)));
    }
    return nuevoArreglo;
}

let edadMinima: number = 3;
let edadMaxima: number =7;
let cantidadJugadores: number = 0;
let edadNinios : number[] = new Array;
let sumaTotal : number = 0;
let promedio : number = 0;
cantidadJugadores = rls.questionInt("Ingrese la cantidad de jugadores: ");

edadNinios = aleatorio(cantidadJugadores,edadMinima,edadMaxima+1);
console.log(edadNinios);

for (let i:number = 0; i < edadNinios.length ; i++){
    sumaTotal = sumaTotal + edadNinios[i];
}

promedio = (sumaTotal / edadNinios.length);
console.log(promedio);

