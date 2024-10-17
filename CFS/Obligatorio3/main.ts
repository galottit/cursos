// Crear un sistema de personajes de un 
// videojuego RPG utilizando herencia y 
// polimorfismo. Los personajes tendrán 
// características y habilidades únicas, y 
// algunos podrán evolucionar a versiones 
// mejoradas con nuevas habilidades.
// CFS

// Ejemplo de clase base personaje
// El personaje debe tener atributos ej:
// nombre (string): El nombre del personaje.
// nivel (number): El nivel del personaje (empieza en 1).
// puntosDeVida (number): Los puntos de vida del personaje.
// Métodos ej:
// atacar(): Imprime un mensaje indicando que el personaje 
// está atacando.
// defender(): Imprime un mensaje indicando que el personaje 
// está defendiendo.
// CFS

// Aclaracion, pueden crear las propiedades que quieran 
// pero no se vayan por la ramas. Hagan lo justo y 
// necesario. 
// Recomendamos crear  3 tipos de héroes (mago, 
// luchador, arquero) y luego algunos especiales.

// Punto  extra: Contexto: un jugador puede encontrar una caja mágica en algún 

// momento y al abrirla el personaje aprende un nuevo ataque.
// ¿Qué cambio debe realizar en la clase?- Olvidense de la caja, 
// imaginen que ya está abierta-
// Requisito fundamental para realizar consultas sobre el punto extra:
//                   Haber terminado el video juego.
import * as rls from "readline-sync";
import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";
import { Personaje } from "./personaje";

let cantidadPeleas:number = 3;
puntos();
console.log("Comenzando juego");
puntos();
let nombre: string = "";
while (nombre.length < 1 || nombre.length >= 15) {
    nombre = rls.question("Ingrese el nombre del personaje:    ");
}
let opcion:number = 0;
let personaje;
do {
    console.log("Seleccione que tipo de personaje desea");
    console.log("");
    console.log("1. Mago");
    console.log("2. Luchador");
    console.log("3. Arquero");
    puntos();

    opcion = rls.questionInt("");

    switch (opcion) {
        case 1:
            personaje = new Mago (nombre, 100);
            break;
        case 2:
            personaje = new Luchador (nombre, 100);
            break;
        case 3:
            personaje = new Arquero (nombre, 100);
            break;
    }
} while (opcion > 3 || opcion < 1);

if (personaje instanceof Arquero){
    peleaArquero(personaje);
} else if (personaje instanceof Luchador){
    peleaLuchador(personaje);
} else if (personaje instanceof Mago){
    peleaMago(personaje);
}


function peleaArquero(personaje:Arquero):void{
    let vidaDelRival:number = cantidadPeleas * 10;
    while(vidaDelRival >0){
        personaje.defender();
        vidaDelRival--;
        console.log("sadasdasd");
        console.log(personaje);
    }
}
function peleaMago(personaje:Mago):void{
    while (personaje.getVida() >= 0){
        let vidaDelRival:number = cantidadPeleas * 10;
        while(vidaDelRival >= 0){
            personaje.defender(Math.floor(Math.random() * (cantidadPeleas)) +1);
            let ptsAtaque:number = Math.floor(Math.random() * (personaje.getNivel())) +1;
            personaje.atacar(ptsAtaque *10);
            vidaDelRival = vidaDelRival - ptsAtaque *10;
            if (vidaDelRival <= 0){
                console.log("Derrotaste al rival nivel "+cantidadPeleas+". Subes de nivel");
                console.log("Vamos a seguir luchando a ver que tan lejos puedes llegar");
                cantidadPeleas =+1;
                personaje.setSubirNivel();
                vidaDelRival = cantidadPeleas *10;
                break;
            }
            console.log("la vida del rival es de "+vidaDelRival);
            if(personaje.getVida()<=0){
                break;
            }
        }
        cantidadPeleas =+1 ;
    }
    console.log("Felicitaciones, llegaste al nivel "+ personaje.getNivel());
}
function peleaLuchador(personaje:Luchador):void{
    let vidaDelRival:number = cantidadPeleas * 10;
    while(vidaDelRival >0){
        personaje.defender();
        vidaDelRival--;
    }
}

function puntos() {
    console.log(".........................................................");
}