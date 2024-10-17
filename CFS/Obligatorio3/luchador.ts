import {Personaje } from "./personaje"

const habilidadesLuchador:string[]= ["golpe de puño", "patada giratoria", "codazo"]

export class Luchador extends Personaje{

    constructor(nombre:string, puntosDeVida:number){
        super(nombre, puntosDeVida)
        this.habilidades.push(this.obtenerHabilidad(habilidadesLuchador));
    }   
    agregarHabilidad():void{
        let nuevaHabilidad = this.obtenerHabilidad(habilidadesLuchador);
        console.log("La nueva habilidad es: " + nuevaHabilidad);
        if (!this.habilidades.includes(nuevaHabilidad)) {
            this.habilidades.push(nuevaHabilidad);    
            console.log("Se agregó a tus habilidades")
        } else {
            console.log("Por desgracia ya la tienes. Mucha suerte para la próxima")
        }
    }
    public atacar(): void {
        console.log("El luchador está atacando")
    }

    public defender(): void {
        console.log("El luchador está defendiendo")
    }
}
