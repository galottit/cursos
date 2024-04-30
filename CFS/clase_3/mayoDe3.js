"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var no1 = rls.questionInt("Ingrese el primer numero: ");
var no2 = rls.questionInt("Ingrese el segundo numero: ");
var no3 = rls.questionInt("Ingrese el tercer numero: ");
if (no1 == no2 && no1 > no3) {
    console.log("los primeros dos número son iguales y los más grandes. " + no1);
}
else if (no2 == no3 && no2 > no1) {
    console.log("los ultimos dos número son iguales y los más grandes. " + no2);
}
else if (no1 == no3 && no1 > no2) {
    console.log("El primer y el último número que ingresaste son iguales y los más grandes. " + no3);
}
else if (no1 > no2 && no1 > no3) {
    console.log("El número más grande es el primero que ingresaste, " + no1);
}
else if (no2 > no3) {
    console.log("el número más grande es el segundo que ingresaste, " + no2);
}
else {
    console.log("el número mpas grande es el tercero que ingresaste, " + no3);
}
