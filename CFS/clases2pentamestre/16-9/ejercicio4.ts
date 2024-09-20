// Ejercicio 4
// • Crear la clase Biblioteca. La misma estará
// compuesta por un listado de libros y por un listado
// de socios. Los socios estaran identificados por
// nombre, apellido y dni. Los libros estaran
// identificados por titulo, autor y tematica.
// • Los socios podran retirar uno o mas libros, y
// tambien podran devolverlos.
// • Los libros podran tener dos condiciones, disponible
// o no disponible.
// • Incorporar las funcionalidades que consideren
// necesarias (libre)

class Biblioteca {
    private libros : Libros[];
    private socios : Socios[];

    constructor (libros:Libros[], socios: Socios[]){
        this.libros = libros;
        this.socios = socios;
    }

}

class Libros {
    private titulo : string;
    private autor : string;
    private tematica : string;
    private disponible : boolean;
    private enPoderDe : Socios;

    constructor (titulo:string, autor:string, tematica:string, biblioteca:Socios){
        this.titulo = titulo;
        this.autor = autor;
        this.tematica = tematica;
        this.disponible = true;
        this.enPoderDe = biblioteca;
    }

}

class Socios {
    private nombre : string;
    private apellido : string;
    private dni : number;
    private cantidadDeLibros : number;
    private librosEnPoder : number[];

    constructor (nombre:string, apellido:string, dni:number, libros:number[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.librosEnPoder = libros;
        this.cantidadDeLibros = libros.length-1;

    }
}

//cargo socios y libros ficticios

let userBiblioteca = new Socios("biblioteca", "biblioteca", 1, [0]);
let socio1 = new Socios("tomas", "galotti", 37241178, [0]);
let socio2 = new Socios("toma2", "galott2",237241178, [0]);
let socio3 = new Socios("toma3", "galott3",337241178, [0]);
let socio4 = new Socios("toma4", "galott4",437241178, [0]);
let socio5 = new Socios("toma5", "galott5",537241178, [0]);
let socio6 = new Socios("toma6", "galott6",637241178, [0]);
let socio7 = new Socios("toma7", "galott7",737241178, [0]);
let socio8 = new Socios("toma8", "galott8",837241178, [0]);

let libro1 = new Libros("titulo1", "autor1", "terror",userBiblioteca);
let libro2 = new Libros("titulo2", "autor2", "novela", userBiblioteca);
let libro3 = new Libros("titulo3", "autor1", "novela", userBiblioteca);
let libro4 = new Libros("titulo4", "autor2", "terror", userBiblioteca);
let libro5 = new Libros("titulo5", "autor3", "fantasia", userBiblioteca);
let libro6 = new Libros("titulo6", "autor4", "fantasia", userBiblioteca);
let libro7 = new Libros("titulo7", "autor1", "fantasia", userBiblioteca);
let libro8 = new Libros("titulo8", "autor2", "novela", userBiblioteca);
let libro9 = new Libros("titulo9", "autor2", "fantasia", userBiblioteca);
let libro10 = new Libros("titulo10", "autor3", "novela", userBiblioteca);

let listadoLibros1: Libros[] = [libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9,libro10];
let listadoSocios1: Socios[] = [socio1,socio2,socio3,socio4,socio5,socio6,socio7,socio8];
let biblioteca1: Biblioteca = new Biblioteca(listadoLibros1, listadoSocios1);


