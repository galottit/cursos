import * as readlineSync from "readline-sync";

let numero : number = readlineSync.questionInt("ingrese el número:");
let hastaNumero : number = readlineSync.questionInt("ingrese hasta que número:");

for (let i : number = 1; i <= hastaNumero ; i++){
    console.log(numero + " X " + i + " = "+ numero * i);
}