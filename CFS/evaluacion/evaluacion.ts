// Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). 
// Cuente la cantidad de A, E y O que hay en ese string y almacene esas cantidades 
// en otro arreglo de 3 elementos en el orden que usted desee.
// Pegar el codigo aquí.

/*
let textoAEvaluar : string = "ESTEESELSTRINGQUEVOYAUSARENLAEVALUACION";
let resultados : number[] = new Array;

let cantA : number = 0;
let cantE : number = 0;
let cantO : number = 0;

for (let i : number = 0 ; i <= textoAEvaluar.length; i++){
    switch(textoAEvaluar[i]){
        case "A":
            cantA = cantA +1;
            break;
        case "E":
            cantE = cantE +1;
            break;
        case "O":
            cantO = cantO +1;
            break
        default:
            break;
    }
}
resultados = [cantA, cantE, cantO];
console.log(resultados);
*/

// corregir los errores que encuentre
/*
function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    for ( let i : number = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

let arregloPrueba : number[] = [1,6,2,7,3];
console.log(sumarArreglo(arregloPrueba));

*/

/*
function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor < 7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
     return "gris";
}
console.log(establecerColorPorNota(0));
console.log(establecerColorPorNota(2));
console.log(establecerColorPorNota(9));
console.log(establecerColorPorNota(10));
console.log(establecerColorPorNota(20));
*/
/*

function obtenerPromedio(arr:number[]): number {    
    let suma: number = 0;
    for (let i : number = 0; i < arr.length ; i++){
        suma = suma + arr[i];
    }
    let promedio: number = suma / arr.length;
    console.log(promedio);
    return promedio;
}

console.log(obtenerPromedio([1,2,3,4,5,6]));

*/

let pruebaTexto1 : string = "asdasdasdaw";
let pruebaTexto2 : string = "LSIJLNADPWAJ";

console.log(pruebaTexto1.toLocaleLowerCase());
console.log(pruebaTexto1.toUpperCase());
console.log(pruebaTexto2.toLocaleLowerCase());
console.log(pruebaTexto2.toUpperCase());
