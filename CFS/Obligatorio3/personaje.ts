

export abstract class Personaje {
    protected nombre:string;
    protected nivel:number = 1;
    protected puntosDeVida:number;
    protected habilidades:string[];

    public constructor(nombre:string, ptsDeVida:number){
        this.nombre = nombre;
        this.puntosDeVida = ptsDeVida;
        this.habilidades = [];
    }

    abstract atacar(multiplicador:number):void;

    abstract defender(multiplicador:number):void;

    protected obtenerHabilidad(habilidades:string[]):string{
        return habilidades[obtenerNumeroAleatorioEntre(0,habilidades.length - 1)];
    }
    public setSubirNivel():void{
        this.nivel+=1;
    }
    public setRestarVida(multiplicador:number):void{
        this.puntosDeVida-= 10 * multiplicador;
    }
    public setRestablecerVida():void{
        this.puntosDeVida = 100;
    }
    public getVida():number{
        return this.puntosDeVida;
    }
    public getNivel():number{
        return this.nivel;
    }
}

function obtenerNumeroAleatorioEntre(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}