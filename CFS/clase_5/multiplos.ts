// Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico 
// verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
// Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
// Recuerde que la operación mod permite saber si el resto de una división es cero

import * as rls from "readline-sync";

let numero1 : number = 0;
let numero2 : number = 0;

numero1 = rls.questionInt("Ingrese el primer número: ");
numero2 = rls.questionInt("Ingrese el segundo número: ");

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

if(esMultiplo(numero1,numero2)){
    console.log("Los numeros son divisibles entre si");
} else {
    console.log("Los números no son divisibles entre si");
}
