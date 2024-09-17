let borrado:string= "borrado";

class Alumnos {
    private nombre:string;
    private apellido:string;
    private nota:number;
    private estaAprovado:boolean;
    private numeroAlumno:number

    public constructor(nombre:string, apellido:string, nota:number, legajo:number){
        this.nombre= nombre;
        this.apellido= apellido;
        this.nota=nota;
        this.numeroAlumno =legajo;
        if(nota >= 7){
            this.estaAprovado = true;
        } else {
            this.estaAprovado = false;
        }
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getNota(): number {
        return this.nota;
    }
    public getEstaAprobado(): boolean{
        return this.estaAprovado;
    }
    public getNumero(): number {
        return this.numeroAlumno;
    }
    public setNombre():void{
        this.nombre = borrado;
        this.apellido =borrado;
        this.nota = 0;
    }

}

class Profesores {
    private nombre:string;
    private apellido:string;
    private numeroProfesor:number;

    public constructor(nombre:string, apellido:string, numeroProfe:number){
        this.nombre= nombre;
        this.apellido= apellido;
        this.numeroProfesor= numeroProfe;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public setNombre():void{
        this.nombre = borrado;
        this.apellido =borrado;
    }
}
class Escuela{
    private nombre:string;
    private listadoProfesores: Profesores[];
    private listadoAlumnos: Alumnos[];

    public constructor (nombre:string, profesores:Profesores[], alumnos:Alumnos[]){
        this.nombre= nombre;
        this.listadoProfesores= profesores;
        this.listadoAlumnos= alumnos;
    }
    public getListadoProfes(): Profesores[] {
        return this.listadoProfesores;
    }
    public getListadoAlumnos(): Alumnos[] {
        return this.listadoAlumnos;
    }
}

let alumno1= new Alumnos("Tomas", "Galotti", 8, 1);
let alumno2= new Alumnos("franco", "perez", 3, 2);
let alumno3= new Alumnos("Martin", "Garcia", 4,3);
let alumno4= new Alumnos("Ramon", "Fulano", 2,4);
let alumno5= new Alumnos("Pedro", "Mengano", 10,5);

let listadoDeAlumnos:Alumnos[]=[alumno1,alumno2,alumno3,alumno4,alumno5];


let profe1= new Profesores("mauricio", "oyar",1);
let profe2= new Profesores("miguel", "zapata",2);

let listadoDeProfes: Profesores[]= [profe1,profe2];

let escuela: Escuela= new Escuela("estrada", listadoDeProfes, listadoDeAlumnos);

function agregarAlumno(escuela:Escuela,nombre:string, apellido:string, nota:number){
    listadoDeAlumnos.push(new Alumnos(nombre, apellido, nota, listadoDeAlumnos.length+1));
}
function agregarProfesor(escuela:Escuela,nombre:string, apellido:string){
    listadoDeProfes.push(new Profesores(nombre, apellido, listadoDeProfes.length+1));
}
function borrarAlumno(legajo:number) {
    listadoDeAlumnos[legajo-1].setNombre();
}
function borrarProfe(legajo:number) {
    listadoDeProfes[legajo-1].setNombre();
}

agregarAlumno(escuela, "toto", "apllido", 6);
agregarProfesor(escuela, "nombreprofe", "apellidoProfe");
borrarAlumno(2);
borrarAlumno(3);
borrarProfe(1);

console.log(escuela);