// • Dados un arreglo de texto y dos
// arreglos de enteros de tamaño n:
// • nombres Como Texto
// • años Como Entero y altura Como Entero
// • Ordénelos los tres vectores a la vez
// según los años, y en caso que haya
// un empate, utilice la altura para
// desempatar
// • Tener en cuenta que los intercambios
// tienen que cambiar los elementos de
// los tres vectores a la vez


function burbuja(arreglo : number[], cantidad : number){
    let i : number; 
    let j : number;
        for (i = 0 ; i < cantidad - 1; i++) {
        for (j = 0 ; j < cantidad; j++) {
            if (comparo(arreglo, j) == -1 ) {
                intercambio(arreglo, j,) ;
                intercambio(altura, j);
                intercambioString(nombre, j);
            } else if (comparo(arreglo, j) == 0){
                if (comparo(altura, j) == -1 ) {
                    intercambio(arreglo, j,) ;
                    intercambio(altura, j);
                    intercambioString(nombre, j);
                }
            }
        }
    }
    return arreglo;
}
function comparo(arreglo : number[], i : number) : number {
    let comparacion : number;
    if (arreglo[i] == arreglo[i+1]){
        comparacion = 0;
    } else if(arreglo[i] < arreglo[i+1]){
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}

function intercambio(arreglo : number[], i : number) : number[]{
    let aux : number;
    aux = arreglo[i+1];
    arreglo[i+1]=arreglo[i];
    arreglo[i]= aux;
    return arreglo;
}
function intercambioString(arreglo : string[], i : number) : string[]{
    let aux : string;
    aux = arreglo[i+1];
    arreglo[i+1]=arreglo[i];
    arreglo[i]= aux;
    return arreglo;
}


import * as rls from 'readline-sync';

let tamanoArreglo : number = rls.questionInt("Ingrese la cantidad de personas que va a ingresar: ");
let nombre : string []= new Array(tamanoArreglo);
let edad : number []= new Array(tamanoArreglo);
let altura : number []= new Array(tamanoArreglo);


for(let i:number = 0; i<tamanoArreglo; i++){
    nombre[i] = rls.question("Ingrese un nombre de la persona "+(i+1)+": ");
    edad[i] = rls.questionInt("Ingrese la edad de la persona "+(i+1)+": ");
    altura[i] = rls.questionInt("Ingrese la altura de la persona "+(i+1)+": ");
}


// console.log(nombre);
// console.log(edad);
// console.log(altura);

burbuja(edad, edad.length)

console.log("nombres: "+nombre);
console.log("edades: "+edad);
console.log("alturas: "+altura);