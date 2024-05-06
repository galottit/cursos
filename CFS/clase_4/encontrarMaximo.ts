/* • Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo */


import * as readlineSync from "readline-sync";
let valoresNumeros : number = readlineSync.questionInt("ingrese valor (0 para cancelar): ");
let valorFinal : number = 0;

if (valoresNumeros == valorFinal ){
    console.log("Usted no ingresó ningún valor");
}else {
    while (valoresNumeros != 0){
        let numeroNuevo : number = readlineSync.questionInt("ingrese valor (0 para cancelar): ");
        if (numeroNuevo == 0){
            valorFinal = valoresNumeros;
            valoresNumeros = numeroNuevo;
        } else if (numeroNuevo > valoresNumeros){
            valoresNumeros = numeroNuevo;
        }
    }
    console.log("el valor mas alto es: " + valorFinal);
}
