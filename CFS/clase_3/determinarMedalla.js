"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var posision = rls.questionInt("Por favor, ingrese en que posicion quedó: ");
if (posision <= 0) {
    console.log("Ingrese una posición válida");
}
else {
    if (posision == 1) {
        console.log("Felicidades, ganaste una medalla de oro");
    }
    else {
        if (posision == 2) {
            console.log("Felicidades, ganaste una medalla de plata");
        }
        else {
            if (posision == 3) {
                console.log("Felicidades, ganaste una medalla de bronce");
            }
            else {
                console.log("Ganaste un certificado de participación");
            }
        }
    }
}
