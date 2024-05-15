// 1) Crear un arreglo de letras e imprimirlo

// 2) Dado un array con nombres de tamaño 5, pedir
// al usuario que ingrese un nombre y verificar si está
// en el arreglo. Imprimir el arreglo y si está o no en
// él.

let letras : string []= new Array(5);
letras[0]= "A";
letras[1]= "B";
letras[2]= "C";
letras[3]= "D";
letras[4]= "E";

console.log(letras);

import * as rls from 'readline-sync';

let nombres : string []= ["Tomas","Pedro","Juan","Martin","Franco"];
let estaEnArreglo : boolean = false;

let nombreIngresado : string = rls.question("Ingrese un nombre: ");
for(let i:number = 0; i<5; i++){
    if (nombreIngresado == nombres[i]){
        estaEnArreglo = true;
    }
}

console.log(nombres);
if(estaEnArreglo){
    console.log("el nombre ingresado está en el arreglo");
}else{
    console.log("el nombre ingresado no está en el arreglo.")
}


