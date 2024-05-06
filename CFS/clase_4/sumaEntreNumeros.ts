import * as readlineSync from "readline-sync";

let num1 : number = readlineSync.questionInt("ingrese el primer número:");
let num2 : number = readlineSync.questionInt("ingrese el segundo número:");
let sumaTotal :number = 0;

if (num2 >= num1){
    for (let i: number = num1; i <= num2; i++){
        sumaTotal = sumaTotal + i;
    }
} else{
    for (let i: number = num2; i <= num1; i++){
        sumaTotal = sumaTotal + i;
    }
}
console.log("la suma es : " + sumaTotal);
