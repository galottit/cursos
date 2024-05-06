// Diseñar un algoritmo que
// lea números enteros hasta
// teclear 0
// • Determinar y mostrar el
// máximo, el mínimo y la
// media de todos los
// números ingresados
// • Pensar cuidadosamente
// cómo debemos inicializar
// las variables

import * as readlineSync from "readline-sync";
let numeroIngresado : number = readlineSync.questionInt("ingrese un número (0 para cancelar): ");
let numeroMayor : number = numeroIngresado;
let numeroMenor : number = numeroIngresado;
let sumaTotal : number = numeroIngresado;
let cantidadNumeros : number = 1;
let ingreso0 : boolean = true;

if (numeroIngresado == 0){
    console.log("Usted no ingresó ningún número.");
} else{
    while(ingreso0){
       numeroIngresado = readlineSync.questionInt("ingrese un número (0 para cancelar): ");
       if (numeroIngresado == 0){
        ingreso0 = false;
       } else 
       cantidadNumeros = cantidadNumeros + 1;
       sumaTotal = sumaTotal + numeroIngresado;
       if (numeroIngresado < numeroMenor && numeroIngresado != 0){
        numeroMenor = numeroIngresado;
       } else if (numeroIngresado > numeroMayor && numeroIngresado != 0){
        numeroMayor = numeroIngresado;
       }
    }
    console.log("El mayor: " + numeroMayor);
    console.log("El menor: " + numeroMenor);
    let promedio : number = sumaTotal / cantidadNumeros;
    console.log("El promedio: " + promedio);
}
