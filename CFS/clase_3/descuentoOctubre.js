"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var valorProducto = rls.questionInt("Ingrese el valor unitario del producto que desea comprar: ");
var cantidadProducto = rls.questionInt("Ingrese la cantidad que desea comprar: ");
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var numeroMes = rls.keyInSelect(meses, 'Elija en que mes va a realizar la compra: ');
if (numeroMes == 9) {
    console.log("El total a pagar es de $" + valorProducto * cantidadProducto * 0.85);
}
else {
    console.log("El total a pagar es de $" + valorProducto * cantidadProducto);
}
