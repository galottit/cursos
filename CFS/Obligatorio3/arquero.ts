import {Personaje } from "./personaje"

const habilidadesArquero:string[]= ["ballesta de mano", "lluvia de flechas", "tiro certero"]

export class Arquero extends Personaje{

    constructor(nombre:string, puntosDeVida:number){
        super(nombre, puntosDeVida)
        this.habilidades.push(this.obtenerHabilidad(habilidadesArquero));
    }   
    agregarHabilidad():void{
        let nuevaHabilidad = this.obtenerHabilidad(habilidadesArquero);
        console.log("La nueva habilidad es: " + nuevaHabilidad);
        if (!this.habilidades.includes(nuevaHabilidad)) {
            this.habilidades.push(nuevaHabilidad);    
            console.log("Se agregó a tus habilidades")
        } else {
            console.log("Por desgracia ya la tienes. Mucha suerte para la próxima")
        }
    }

    public atacar(): void {
        console.log("El Arquero está atacando")
    }

    public defender(): void {
        console.log("El Arquero está defendiendo")
    }
}
