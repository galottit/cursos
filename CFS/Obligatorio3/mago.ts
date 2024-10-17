import {Personaje } from "./personaje"
import * as rls from "readline-sync";

const habilidadesMagos:string[]= ["super truco", "truco de magia", "hechizo"]

export class Mago extends Personaje{

    constructor(nombre:string, puntosDeVida:number){
        super(nombre, puntosDeVida)
        this.habilidades.push(this.obtenerHabilidad(habilidadesMagos));
    }   

    public atacar(multiplicador:number): void {
        console.log("El mago está atacando")
        console.log("Le quitaste "+multiplicador+" puntos de vida a tu rival");
    }

    public defender(multiplicador:number): void {
        console.log("Te están atacando")
        console.log("Te quitaron "+multiplicador*10+" puntos de vida");
        this.setRestarVida(multiplicador);
    }
    agregarHabilidad():void{
        let nuevaHabilidad = this.obtenerHabilidad(habilidadesMagos);
        console.log("La nueva habilidad es: " + nuevaHabilidad);
        if (!this.habilidades.includes(nuevaHabilidad)) {
            this.habilidades.push(nuevaHabilidad);    
            console.log("Se agregó a tus habilidades")
        } else {
            console.log("Por desgracia ya la tienes. Mucha suerte para la próxima")
        }
    }
}


function puntos() {
    console.log(".........................................................");
}