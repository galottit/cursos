"use strict";

let boton1 =  document.getElementById("boton1");
boton1.addEventListener("click", mostrarOcultar1);
let boton2 =  document.getElementById("boton2");
boton2.addEventListener("click", mostrarOcultar2);


function mostrarOcultar1() {
    var divIzquierda = document.getElementById("divIzquierda");
    divIzquierda.style.visibility = "hidden";
    var divDerecha = document.getElementById("divDerecha");
     divDerecha.style.visibility = "visible";

}

function mostrarOcultar2() {
    var divIzquierda = document.getElementById("divIzquierda");
    divIzquierda.style.visibility = "visible";
    var divDerecha = document.getElementById("divDerecha");
    divDerecha.style.visibility = "hidden";

}
