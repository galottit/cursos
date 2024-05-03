"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numParImpar = rls.questionInt("Ingrese el número que desea saber si es Par o Impar: ");
if (numParImpar == 0) {
    console.log("El número que ingresó es el 0, por lo tanto es par");
}
else if (numParImpar % 2 > 0) {
    console.log("El número ingrsado es impar");
}
else {
    console.log("El número ingrsado es par");
}
