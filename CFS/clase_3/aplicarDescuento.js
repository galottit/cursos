"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
//import * as readlineSync from "readline-sync";
var valorProducto = rls.questionInt("Por favor, ingrse el monto del valor del producto: ");
var cantidadProducto = rls.questionInt("Por favor, ingrese la cantidad que desea comprar: ");
var valorTotal = valorProducto * cantidadProducto;
var valorConDescuento = valorTotal * 0.9;
if (valorProducto * cantidadProducto >= 1000) {
    console.log("El precio de su compra es de $" + valorConDescuento);
}
else {
    console.log("El precio de su compra es de $" + valorTotal + ". Recuerde que gastando más de $1000 tiene un 10% de descuento");
}
