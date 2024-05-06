// • Leer valores del usuario hasta que introduzca un 0
// • El usuario puede introducir valores numéricos, tanto
// positivos como negativos
// • Contar la cantidad de valores introducidos que sean
// mayores a 0 y el porcentaje de positivos respecto del total

import * as readlineSync from "readline-sync";
let valoresNumeros : number = readlineSync.questionInt("ingrese valor (0 para cancelar): ");
let cantidadValores : number = 0;
let cantidadMayores : number = 0;

if (valoresNumeros > 0){
    cantidadMayores = cantidadMayores + 1;
}

if (valoresNumeros == 0){
    console.log("Usted no ingresó ningún valor");
}else {
    while (valoresNumeros != 0){
        let numeroNuevo : number = readlineSync.questionInt("ingrese valor (0 para cancelar): ");
        cantidadValores = cantidadValores + 1;
        if (numeroNuevo == 0){
            valoresNumeros = numeroNuevo;
        } else if (numeroNuevo > 0){
            cantidadMayores = cantidadMayores + 1;
        }
    }
    let numeroAMostrar : number = cantidadMayores / cantidadValores * 100;
    console.log(cantidadMayores + " positivos, " + numeroAMostrar + "% del total");
}
