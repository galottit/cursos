import * as rls from "readline-sync";

/*
let cantHolaDeseados : number = rls.questionInt("Ingrse la cantidad de holas que desea: ");

let cantHola : number = 0;

while (cantHola != cantHolaDeseados){
    console.log("Hola");
    cantHola ++;
}

*/

// ejercicios de notas con for

let suma, promedio, nota, contador : number;

suma = 0;

for(contador = 0; contador < 10; contador++) {
    nota = rls.questionFloat("Ingrse la nota: ");
    suma += nota;
}

promedio = suma / 10;
console.log("el promedio es " + promedio);
