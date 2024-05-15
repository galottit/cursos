// • Almacene en un arreglo de dimensión N números (la
// cantidad es ingresada por el usuario)
// • Muestre cuántos números son positivos, cuántos son
// negativos y cuántos ceros hay
function parImpar(numero : number){
    if (numero == 0){
        cantidadCeros = cantidadCeros +1;
    }else if (numero > 0){
        cantidadMayor = cantidadMayor +1;
    } else {
        cantidadMenor = cantidadMenor +1;
    }
}   

let cantidadMayor : number = 0;
let cantidadMenor : number = 0;
let cantidadCeros : number = 0;

import * as rls from 'readline-sync';

let tamanoArreglo : number = rls.questionInt("Ingrese la cantidad de numeros que va a ingresar: ");
let arregloIngresado : number []= new Array(tamanoArreglo);

for(let i:number = 0; i<tamanoArreglo; i++){
    arregloIngresado[i] = rls.questionInt("Ingrese un numero: ");
}

for(let i:number = 0; i<tamanoArreglo; i++){
    parImpar(arregloIngresado[i]);
}
console.log("cantidad de postitivos: "+ cantidadMayor + ", cantidad de ceros: "+cantidadCeros+", cantidad negativos: "+cantidadMenor);