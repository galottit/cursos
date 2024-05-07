// Implemente un método llamado imprimirNombre que reciba un nombre y un apellido 
// y devuelva los dos datos concatenados en una variable de tipo string. 
// El string devuelto debe imprimirse por consola.

// Refactorizar el método dibujarGuiones utilizado para el ejercicio de la
// calculadora realizado anteriormente 

import * as readlineSync from "readline-sync";
let nombre : string = "";
let apellido : string = "";
//nombreCompleto : string = "";

function imprimirNombre(nombre:string,apellido:string):string{
    let nombreCompleto : string = "el nombre completo es: " + nombre + " " + apellido;
    return nombreCompleto;
}

function dibujarGuionesN (n : number) {
    let i : number;
    let linea : string = "";
    for (i = 0; i <= n; i++) {
               linea = linea + "-";
    };
        console.log(linea);
}

nombre = readlineSync.question("ingrese el nombre: ");
apellido = readlineSync.question("ingrese el apellido: ");

dibujarGuionesN(50);
console.log(imprimirNombre(nombre,apellido));
dibujarGuionesN(50);

    