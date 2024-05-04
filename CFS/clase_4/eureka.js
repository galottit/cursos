"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var claveReal = "eureka";
var intentos = 0;
var claveUsuario = rls.question('Escriba su contraseña: ', { hideEchoBack: true });
var cantidadIntentos = 3;
var autorizado = false;
for (intentos = 2; intentos > 0; intentos--) {
    if (claveReal == claveUsuario) {
        intentos = 0;
        autorizado = true;
    }
    else {
        claveUsuario = rls.question("Contraseña incorrecta, le quedan " + intentos + " intentos.  Vuelva a ingresar su contraseña: ", { hideEchoBack: true });
    }
}
if (autorizado) {
    console.log("pusiste la clave correcta");
}
else {
    console.log("te quedaste sin intentos");
}
