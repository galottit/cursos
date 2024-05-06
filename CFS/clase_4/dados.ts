import * as readlineSync from "readline-sync";

let cantidadDados : number = readlineSync.questionInt("Ingrase la cantidad de dados: ");
let probabilidad : number = 1;
for (let i: number =1; i <= cantidadDados; i++){
    probabilidad = probabilidad * 6;
}
console.log("las probabilidades de que en todos los dados salga 6 es de 1/" + probabilidad );