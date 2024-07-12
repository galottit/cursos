"use strict";

function verificarForm() {
    //  event.preventDefault();
    let param1=document.getElementById("inptext1").value;
    let param2=document.getElementById("inptext2").value;
    console.log("paso1")
    verificarConParametros(param1, param2);
}

let btn= document.getElementById("boton1");
btn.addEventListener("click", verificarForm);

function verificarConParametros(param1, param2){
    alert("Hola " + param1 + " " + param2);
}


//document.querySelector("#titulo"); //si se trata de un ID se usa un #
//document.getElementById("titulo"); // encuentra el 1er ID en el html;
