import * as readlineSync from "readline-sync";
let nombreAlumno : string;
let alumnoVacio : boolean = true;
while (alumnoVacio){
    nombreAlumno = readlineSync.question("ingrese el nombre del alumno o preicone enter para terminar: ");
    if (nombreAlumno == ""){
        console.log("Gracias por utilizar nuestro programa para calcular promedios");
        alumnoVacio = false;
    } else {
        let nota1 = readlineSync.questionInt("ingrese nota de parte práctica: ");
        let nota2 = readlineSync.questionInt("ingrese nota de parte problemas: ");
        let nota3 = readlineSync.questionInt("ingrese nota de parte teórica: ");

        if ((nota1 > 0 && nota1 <= 10)&&(nota2 > 0 && nota2 <= 10)&&(nota3 > 0 && nota3 <= 10)){
            let promedio : number = (nota1 + (nota2 * 5) + (nota3 * 4))/10;
            console.log("Las notas de " + nombreAlumno + " dan un promedio de: " + promedio);
        }else{
            console.log("Alguno de los datos que ingresó es incorecto");  
        }

    }
    
}