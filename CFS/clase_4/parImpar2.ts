import * as readlineSync from "readline-sync";
let parImpar : number = 0;

while (parImpar == 0){
    parImpar = readlineSync.questionInt("ingrese un número distinto a 0:");
}

if (parImpar % 2 == 0){
    console.log("El número es par");
} else {
    console.log("El número es impar");
}