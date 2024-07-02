"use strict";

function cambiarTexto() {
    let titulo = document.getElementById("imput1").value;
    document.getElementById("titulo").innerText = titulo;
}

//document.querySelector("#titulo"); //si se trata de un ID se usa un #
//document.getElementById("titulo"); // encuentra el 1er ID en el html;
