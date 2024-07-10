"use strict";

let boton1 =  document.getElementById("boton1");
boton1.addEventListener("click", mostrarOcultar1);
let boton2 =  document.getElementById("boton2");
boton2.addEventListener("click", mostrarOcultar2);


function mostrarOcultar1() {
    divIzquierda.style.visibility = "hidden";
    divDerecha.style.visibility = "visible";

}

function mostrarOcultar2() {
    divIzquierda.style.visibility = "visible";
    divDerecha.style.visibility = "hidden";

}
