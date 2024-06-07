import fs from 'node:fs';
/*
let contenido : number = 9;

let contenidoString : string = contenido.toString();
*/
/*
const nombres : string[] = ["Juan", "Amalia", "Nicolas", "carla"];
let contenido: string = "";

for (let i:number = 0; i < nombres.length; i++){
    contenido += `${nombres[i]} `
}
*/

const datos: string = fs.readFileSync('./test.txt', 'utf8');
console.log(datos);
const datos2: string = datos.trim(); // borra los espacios del principio y final
const nuevoArray:string[] = datos2.split(" "); //se para el string en un array, 
console.log(nuevoArray);

