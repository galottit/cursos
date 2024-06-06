// Crear una matriz cuadrada (5x5) donde cada fila
// impar de la matriz son ceros y el resto son unos.
// Luego un usuario ingresará una posición de la
// matriz, (un valor para una fila y otro para la
// columna). En esa posición deberá reemplazar el
// valor existente por un 5.

import * as rls from "readline-sync";

function crearMatriz(filas:number, columnas:number) : number[][]{
    let matrizCreada : number[][] = new Array(columnas);
    for (let i:number = 0; i < filas ; i++){
        matrizCreada[i] = new Array(columnas);
    }
    for (let i:number = 0; i < filas; i++){
        for (let j:number = 0; j < columnas ; j++){
            if(i % 2 == 0){
                matrizCreada[i][j]= 1;
            }
            else {
                matrizCreada[i][j]= 0;
            }
        }
    }
    return matrizCreada;
}

function cambiarNumero():number[][]{
    while (filaIngresada < 1 || filaIngresada > filas){
        filaIngresada = rls.questionInt("Ingrese la fila donde va a cambiar el valor, recuerde que tiene que tiene que estar entre 1 y "+filas+": ");
    }
    while (columnaIngresada < 1 || columnaIngresada > columnas){
        columnaIngresada = rls.questionInt("Ingrese la columna donde va a cambiar el valor, recuerde que tiene que tiene que estar entre 1 y "+columnas+": ");
    }
    matrizNueva [filaIngresada-1][columnaIngresada-1] = 5;
    return matrizNueva;
}

const columnas : number = 5;
const filas : number = 5;
let matrizNueva : number [][];
let columnaIngresada : number = 0;
let filaIngresada : number = 0;

matrizNueva = crearMatriz(filas, columnas);
matrizNueva = cambiarNumero();

console.log(matrizNueva);

