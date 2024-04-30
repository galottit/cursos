import * as rls from "readline-sync";
//import * as readlineSync from "readline-sync";

let numeroDeseado : number = rls.questionInt("Escriba el número que desea saber si es mayor a 20 ");
if (numeroDeseado <= 20){
    console.log("El número que ingresó no es mayor que 20: ");
}else{
    console.log("El número ingresado es mayor que 20, FELICITACIONES!!");
}
