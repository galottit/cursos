// Realice un programa que devuelva la potencia de un número. 
// La base y el exponente deben ser ingresados por teclado. 
// Sólo deben admitirse exponentes mayores o iguales a cero. 
// Recuerde que el resultado de un numero elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos. 


import * as readlineSync from "readline-sync";
let numeroExponente : number = -1;
let numeroBase : number = 1;
let resultadoFinal : number = 1;

function calculoExponente (numeroBase : number ,numeroExponente : number) : number {
    let resultado : number = 1;
    for (let i : number =1; i <= numeroExponente ; i++){
        resultado = resultado * numeroBase;
    }
    return resultado;
}

numeroBase = readlineSync.questionInt("Por favor, ingrese la base: ");

while(numeroExponente < 0){
    numeroExponente = readlineSync.questionInt("Por favor, ingrese un exponente mayor o igual que 0: ");
}

if (numeroExponente == 0){
    console.log("El resultado de la operación es 1");
}else {
    resultadoFinal = calculoExponente(numeroBase, numeroExponente);
    console.log("El resultado de la operación es " + resultadoFinal);
}
