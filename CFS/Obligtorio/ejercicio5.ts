// Ejercicio 5
// • Implementar la clase RegistroAutomotor
// (Autos, Motos, Camiones) y deben tener los
// metodos:
// • AgregarVehiculo, get y set, modificar un
// vehiculo, dar de baja
// • incorporando los conceptos nuevos:
// • Encapsulamiento y composicion.

// • Mandar el link al repositorio de GitHub
// Aclaración: no hay una sola forma de tener bien
// los ejercicios → lo que importa es saber
// justificar bien las decisiones que se tomen
import { RegistroAutomotor, registro } from "./registro"

import * as rls from "readline-sync";
import { listadoPersonas, Vehiculos, tipos, listadoVehiculos } from "./vehiculos";
import { Personas } from "./personas";
let opcion: number;

do {
    console.log("bienvenido al registro automotor, por favor indique que accion desea realizar");
    console.log("1. Alta de nuevo vehiculo");
    console.log("2. Baja de vehículo");
    console.log("3. Transferencia de vehículo");
    console.log("4. Salir");

    opcion = rls.questionInt("");

    switch (opcion) {
        case 1:
            nuevoVehiculo();
            opcion = 4
            break;
        case 2:
            // Lógica para la opción 2
            bajaVehiculo();
            break;
        case 3:
            //logica opcion 3
            console.log('opcion 3');
            break;
        case 4:
            //opcion 4
            console.log("Saliendo.....")
        default:
            console.log('Opción inválida.');
    }
} while (opcion !== 4);


function nuevoVehiculo() {
    let nuevoTipo: number = 0;
    while(nuevoTipo <1 || nuevoTipo>3){
        console.log("Ingrese el tipo de vehículo: ");
        console.log("1- Autos");
        console.log("2- Motos");
        console.log("3- Camiones")
        nuevoTipo = rls.questionInt("");
    }
    let nuevaMarca: string = rls.question("Ingrese la marca del vehículo:   ");
    let nuevoModelo: string = rls.question("ingrese el modelo del vehículo:   ");
    let nuevoAño: number = rls.questionInt("ingrese el año de fabricación del vehículo:   ");
    let estaCargado: boolean = false;
    let nuevaPersona: number = listadoPersonas.length + 1;
    let nuevoDni = rls.questionInt("Ingrese el dni del titular:  ");
    listadoPersonas.forEach((persona, indice) => { //recorro todas las personas para ver si ya existe ese dni
        if (persona.getDni() == nuevoDni) {
            nuevaPersona = indice;
            estaCargado = true;
        }
    })
    if(estaCargado){
        let nuevoVehiculo:Vehiculos = new Vehiculos(tipos[nuevoTipo], nuevaMarca,nuevoModelo,nuevoAño,listadoPersonas[nuevaPersona] );
        listadoVehiculos.push(nuevoVehiculo);
    } else{
        let nuevoNombre:string = rls.question("Ingrese el nombre del titular:   ");
        let nuevoApellido:string = rls.question("Ingrese el apellido del titular:   ");
        let nuevoDueño: Personas = new Personas(nuevoNombre, nuevoApellido, nuevoDni);
        listadoPersonas.push(nuevoDueño);
        let nuevoVehiculo:Vehiculos = new Vehiculos(tipos[nuevoTipo], nuevaMarca,nuevoModelo,nuevoAño,listadoPersonas[listadoPersonas.length-1] );
        listadoVehiculos.push(nuevoVehiculo);
    }

}

function bajaVehiculo(){
    let dni: number = rls.questionInt("Ingrese el dni del dueño del vehículo");
    listadoPersonas.forEach((persona, indice) => { //recorro todas las personas para ver si ya existe ese dni
        if (persona.getDni() == dni) {
            console.log("¿Que vehiculo quiere dar de baja?:    ")
            let nuemeroVehiculo :number = 1;
            for (let i:number = 0; i<listadoVehiculos.length; i++ ){
                if(listadoVehiculos[i].getDueño().getDni() == dni){
                    console.log(nuemeroVehiculo+"- "+ listadoVehiculos[i].getTipo()+" "+ listadoVehiculos[i].getmarca()+ " "+listadoVehiculos[i].getAño())
                }
            }
        }
    })
    let opcion: number = rls.questionInt("");
}