// let btn = document.getElementById("btn1");
// btn.addEventListener("click", function() {
//     let tiempoBomba = 5;

//     setTimeout(function(){
//      cuentaRegresiva(tiempoBomba); //esto va a hacer que la funcion se ejecute 5s despues
//     }, 3000);


// })

// function cuentaRegresiva(i) {
//     let intervalo = setInterval(function(){
//         console.log(i);
//         if(i===0){
//             clearInterval(intervalo);
//             alert("boooooom")
//         }else {
//             i--;
//         }
//     }, 
// 1000);
// }

let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = "<h1> Vengo desde JS </h1>"; //cambia el pedazo de html del id que le pases
//parrafo.innerText = "texto a cambiar"; // cambia solo el texto de determinado id