// • Sumar los elementos de cada una de las posiciones
// de dos arreglos y guardar el resultado en otro arreglo
// • El arreglo tiene dimensión 6 y los números de los dos
// vectores los carga el usuario

import * as rls from 'readline-sync';

let numeroArray1 : number []= new Array(6);
let numeroArray2 : number []= new Array(6);
let numeroSuma : number []= new Array(6);


console.log("Primer Arreglo");

for(let i:number = 0; i<6; i++){
    numeroArray1[i] = rls.questionInt("Ingrese un numero: ");
}
console.log("Segundo Arreglo");
for(let i:number = 0; i<6; i++){
    numeroArray2[i] = rls.questionInt("Ingrese un numero: ");
}
for(let i:number = 0; i<6; i++){
    numeroSuma[i] = numeroArray1[i] + numeroArray2[i];
}
console.log(numeroArray1);
console.log(numeroArray2);
console.log(numeroSuma);