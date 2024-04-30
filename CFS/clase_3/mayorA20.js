"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
//import * as readlineSync from "readline-sync";
var numeroDeseado = rls.questionInt("Escriba el número que desea saber si es mayor a 20 ");
if (numeroDeseado <= 20) {
    console.log("El número que ingresó no es mayor que 20");
}
else {
    console.log("El número ingresado es mayor que 20, FELICITACIONES!!");
}
