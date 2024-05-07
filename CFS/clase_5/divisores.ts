// Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
// Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
// Re-utilice el método esMultiplo implementado para el ejercicio anterior

import * as rls from "readline-sync";
let cantidadDeDivisores : number = 0;
let numero1 : number = 0;
let divisor : number = 0;

numero1 = rls.questionInt("Ingrese el número que desea saber la cantidad de divisores que tiene: ");

divisor = numero1;
for (let i : number = 1; i <= numero1 ; i++){
    if (esMultiplo(numero1,divisor)){
        cantidadDeDivisores = cantidadDeDivisores + 1;
    }
    divisor = divisor - 1;
}
console.log("la cantidad de divisores que tiene es de: " + cantidadDeDivisores);

function esMultiplo(numero1:number,numero2:number): boolean{
    let respuesta : boolean = true;
    if(numero1 % numero2 == 0){
        respuesta = true;
        return respuesta;
    } else {
        respuesta = false;
        return respuesta;
    }
}