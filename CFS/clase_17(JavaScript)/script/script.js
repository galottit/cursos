"use strict";

function cambiarTexto() {
    let entrada = document.getElementById("imput1");
    let titulo = entrada.value; 
    document.getElementById("titulo").innerText = titulo;
}

//document.querySelector("#titulo"); //si se trata de un ID se usa un #
//document.getElementById("titulo"); // encuentra el 1er ID en el html;
