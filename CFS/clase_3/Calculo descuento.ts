import * as readlineSync from "readline-sync";
let precio : number = readlineSync.question("ingrese el precio del producto:");
let descuento : number = 10; //descuento en %
let precioFinal : number;
precioFinal = (precio - (precio * descuento / 100));
console.log("El precio a pagar es de: $" + precioFinal);
