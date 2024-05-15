// • Almacene en un arreglo de tamaño N los números ingresados
// por el usuario
// • La dimensión N también es ingresada por el usuario
// • Muestre los números del arreglo pero del ultimo al primero

import * as rls from 'readline-sync';

let tamanoArreglo : number = rls.questionInt("Ingrese la cantidad de numeros que va a ingresar: ");
let arregloIngresado : number []= new Array(tamanoArreglo);
let arregloInvertido : number []= new Array(tamanoArreglo);



console.log("Ingrese los numeros que desea invertir el orden");

for(let i:number = 0; i<tamanoArreglo; i++){
    arregloIngresado[i] = rls.questionInt("Ingrese un numero: ");
}

console.log(arregloIngresado);

let contador : number = tamanoArreglo - 1;

for(let i:number = 0; i<tamanoArreglo; i++){
    arregloInvertido[i] = arregloIngresado[contador]; 
    contador = contador - 1;
}
console.log(arregloInvertido);