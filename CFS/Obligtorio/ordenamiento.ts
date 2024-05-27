function burbuja(arreglo : number[], cantidad : number){
    let i : number; 
    let j : number;
        for (i = 0 ; i < cantidad - 1; i++) {
        for (j = 0 ; j < cantidad; j++) {
            if (comparo(arreglo, j) == -1 ) {
                intercambio(arreglo, j,) ;
            }
        }
    }
    return arreglo;
}
function comparo(arreglo : number[], i : number) : number {
    let comparacion : number;
    if (arreglo[i] == arreglo[i+1]){
        comparacion = 0;
    } else if(arreglo[i] < arreglo[i+1]){
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}

function intercambio(arreglo : number[], i : number) : number[]{
    let aux : number;
    aux = arreglo[i+1];
    arreglo[i+1]=arreglo[i];
    arreglo[i]= aux;
    return arreglo;
}


//Funcion para crear un arreglo al azar
function crearArreglo(cantidad: number) : number[]{
    let nuevoArreglo : number[] = new Array(cantidad);
    for (let i: number = 0; i < cantidad; i++) {
        nuevoArreglo[i] = Math.floor(Math.random() * valorMax);
    }
    return nuevoArreglo;
}

let cantidad : number = 15; //Largo del arreglo
let valorMax : number = 30 //Máximo valor de los números del arreglo
let arreglo : number[] = crearArreglo(cantidad);
console.log(arreglo);
console.log(burbuja(arreglo, cantidad));