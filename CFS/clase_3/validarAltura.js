"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var alturaCliente = rls.questionInt("Por favor, ingrse su altura (en cm): ");
if (alturaCliente < 130) {
    console.log("Usted es muy enana/o, no se puede subir a esta montaña rusa.");
}
else {
    console.log("Perfecto, pasó con nuestros estrictos protocolos de seguridad, prosiga hacia la montaña rusa");
}
