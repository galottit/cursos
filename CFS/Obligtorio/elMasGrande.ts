// Encontrar el elemento más grande del arreglo
// Dado el siguiente arreglo
// [4,7,9,3,1,45,67,23,29,78,11,16]
// - Crear un programa que encuentre cuál es el número
// más grande del arreglo e imprimirlo por consola
// - Almacenar el número más grande en una variable
// global y pasarlo a una función para determinar si el
// número es par o impar
function parImpar(numero:number){
    if (numero % 2 == 0){
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

let numeros : number []= [4,7,9,3,1,45,67,23,29,78,11,16];
let numeroGrande : number = 0;


for(let i:number = 0; i<12; i++){
    if (numeroGrande < numeros[i]){
        numeroGrande = numeros[i];
    }
}
console.log(numeroGrande);
parImpar(numeroGrande);

