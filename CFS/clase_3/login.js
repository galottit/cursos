"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nombreUsuario = rls.question("Escriba el nombre de usuario: ");
var claveUsuario = rls.question('Escriba su contraseña: ', { hideEchoBack: true });
if (nombreUsuario == "Juan" && claveUsuario == "claveJuan") {
    console.log("El usuario y contraseña son correctos");
}
else {
    console.log("Usuario o clave incorrecots. Por favor revisarlos");
}
