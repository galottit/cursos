// Guarda la información de los siguientes arrays:

// const precios: number[] = [525, 3500, 400, 1999];
// const productos: string[] = ["Leche", "Galletitas", "Harina",
// "Queso"];
// en un archivo “precios.txt” y “productos.txt”
// respectivamente.
// Luego recupera la información en forma de
// array nuevamente y mostrala por consola.

import fs from 'node:fs';

function crearArchivo(nombre:string, arreglo:any[]){
    let pasarAString : string = arreglo.toString();
    let nuevoString : string = "";
    for (let i:number = 0; i < arreglo.length; i++){
        nuevoString += `${arreglo[i]} `
    }
    fs.writeFileSync("./"+nombre+".txt", nuevoString);
}
function leerYCrearArray(nombreArchivo:string):any[]{
    let contenidoArchivo : string = fs.readFileSync("./"+nombreArchivo+".txt", 'utf8');
    contenidoArchivo = contenidoArchivo.trim();
    let arrayDeContenido : string[] = contenidoArchivo.split(" ");
    let arraySiNumero :number[] = arrayDeContenido.map(i=>Number(i));
    let esNumero : boolean = true;
    for (let i:number = 1; i<arraySiNumero.length; i++)
        if (Number.isNaN(arraySiNumero[i])){
            esNumero = false;
        }
    if (esNumero){
        return arraySiNumero;
    } else {
        return arrayDeContenido;
    } 
}

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

crearArchivo("precios", precios);
crearArchivo("productos", productos);

let nuevoArrayPrecios : number[] = leerYCrearArray("precios");
let nuevoArrayProductos : string[] = leerYCrearArray("productos");

console.log(nuevoArrayPrecios);
console.log(nuevoArrayProductos);