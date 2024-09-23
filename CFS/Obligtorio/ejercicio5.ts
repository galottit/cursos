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
import { listadoPersonas, Vehiculo, tipos, listadoVehiculos } from "./vehiculos";
import {Persona} from "./personas";
let opcion: number;

do {
    puntos();
    console.log("bienvenido al registro automotor, por favor indique que accion desea realizar");
    console.log("");
    console.log("1. Alta de nuevo vehiculo");
    console.log("2. Baja de vehículo");
    console.log("3. Transferencia de vehículo");
    console.log("4. Salir");

    opcion = rls.questionInt("");

    switch (opcion) {
        case 1:
            nuevoVehiculo();
            break;
        case 2:
            // Lógica para la opción 2
            bajaVehiculo();
            break;
        case 3:
            transferenciaVehiculo();
            break;
        case 4:
            //opcion 4
            console.log("Saliendo.....")
        default:
            console.log('Opción inválida.');
    }
} while (opcion !== 4);

function puntos() {
    console.log(".........................................................");
}
function nuevoVehiculo() {
    puntos();
    let nuevoTipo: number = 0;
    while (nuevoTipo < 1 || nuevoTipo > 3) {
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
    if (estaCargado) {
        let nuevoVehiculo: Vehiculo = new Vehiculo(tipos[nuevoTipo], nuevaMarca, nuevoModelo, nuevoAño, listadoPersonas[nuevaPersona]);
        listadoVehiculos.push(nuevoVehiculo);
    } else {
        let nuevoNombre: string = rls.question("Ingrese el nombre del titular:   ");
        let nuevoApellido: string = rls.question("Ingrese el apellido del titular:   ");
        let nuevoDueño: Persona = new Persona(nuevoNombre, nuevoApellido, nuevoDni);
        listadoPersonas.push(nuevoDueño);
        let nuevoVehiculo: Vehiculo = new Vehiculo(tipos[nuevoTipo], nuevaMarca, nuevoModelo, nuevoAño, listadoPersonas[listadoPersonas.length - 1]);
        listadoVehiculos.push(nuevoVehiculo);
    }
    puntos();
    console.log("...............cargado con exito.......................");
    puntos();
}
function bajaVehiculo() {
    puntos();
    let dni: number = rls.questionInt("Ingrese el dni del dueño del vehículo:    ");
    let vehiculoADarDeBaja: number[] = []; // creo un array donde voy a meter los indices de los vehículos que estan a nombre de este dni
    let existeDueño:boolean= false;
    listadoPersonas.forEach((persona, indice) => { //recorro todas las personas para ver si ya existe ese dni
        if (persona.getDni() == dni) {
            console.log("¿Que vehiculo quiere dar de baja?:    ")
            let nuemeroVehiculo: number = 1;
            for (let i: number = 0; i < listadoVehiculos.length; i++) {
                if (listadoVehiculos[i].getDueño().getDni() == dni) {
                    console.log(nuemeroVehiculo + "- " + listadoVehiculos[i].getTipo() + " " + listadoVehiculos[i].getmarca() + " " + listadoVehiculos[i].getModelo() + " " + listadoVehiculos[i].getAño());
                    nuemeroVehiculo++;
                    vehiculoADarDeBaja.push(i); //guardo los indices en el array
                    existeDueño = true;
                }
            }
        }
    })
    if(existeDueño){
    let opcion: number = rls.questionInt("");
    console.log("Seguro que quiere dar de baja " + listadoVehiculos[vehiculoADarDeBaja[opcion - 1]].getTipo() + " " + listadoVehiculos[vehiculoADarDeBaja[opcion - 1]].getmarca() + " " + listadoVehiculos[vehiculoADarDeBaja[opcion - 1]].getModelo() + " " + listadoVehiculos[vehiculoADarDeBaja[opcion - 1]].getAño());
    console.log("1- Si");
    console.log("2- No");
    let estaSeguro: number = rls.questionInt("");
    if (estaSeguro == 1) {
        listadoVehiculos.splice(vehiculoADarDeBaja[opcion - 1], 1);
        console.log(".......................................................");
        console.log("...............borrado con exito.......................");
        console.log(".......................................................");
    }
    } else {
        console.log("..................No existe persona con ese dni en la BD.........");
    }
}
function transferenciaVehiculo() {
    console.log("Ingrese el dni del vendedor");
    let dniVendedor: number = rls.questionInt("");
    let vehiculoATransferir: number[] = []; // creo un array donde voy a meter los indices de los vehículos que estan a nombre de este dni
    let existeDueño: boolean = false;
    listadoPersonas.forEach((persona) => { //recorro todas las personas para ver si ya existe ese dni
        if (persona.getDni() == dniVendedor) {
            console.log("¿Que vehiculo quiere transferir:    ")
            let nuemeroVehiculo: number = 1;
            for (let i: number = 0; i < listadoVehiculos.length; i++) {
                if (listadoVehiculos[i].getDueño().getDni() == dniVendedor) {
                    console.log(nuemeroVehiculo + "- " + listadoVehiculos[i].getTipo() + " " + listadoVehiculos[i].getmarca() + " " + listadoVehiculos[i].getModelo() + " " + listadoVehiculos[i].getAño());
                    nuemeroVehiculo++;
                    vehiculoATransferir.push(i);
                    existeDueño = true
                }
            }
        }
    })
    if (existeDueño) {
        let opcion: number = rls.questionInt("");
        console.log("Seguro que quiere transferir " + listadoVehiculos[vehiculoATransferir[opcion - 1]].getTipo() + " " + listadoVehiculos[vehiculoATransferir[opcion - 1]].getmarca() + " " + listadoVehiculos[vehiculoATransferir[opcion - 1]].getModelo() + " " + listadoVehiculos[vehiculoATransferir[opcion - 1]].getAño());
        console.log("1- Si");
        console.log("2- No");
        let estaSeguro: number = rls.questionInt("");
        if (estaSeguro == 1) {
            console.log("ingrese dni del comprador")
            let nuevaPersona: number = listadoPersonas.length + 1;
            let estaCargado = false;
            let dniComprador: number = rls.questionInt("");
            listadoPersonas.forEach((persona, indice) => { //recorro todas las personas para ver si ya existe ese dni
                if (persona.getDni() == dniComprador) {
                    nuevaPersona = indice;
                    estaCargado = true;
                }
            })
            if (estaCargado) {
                listadoVehiculos[vehiculoATransferir[opcion - 1]].setDueño(listadoPersonas[nuevaPersona]);
                puntos();
                console.log(".......................Transferido con exito......................")
                puntos();
            } else {
                let nuevoNombre: string = rls.question("Ingrese el nombre del titular:   ");
                let nuevoApellido: string = rls.question("Ingrese el apellido del titular:   ");
                let nuevoDueño: Persona = new Persona(nuevoNombre, nuevoApellido, dniComprador);
                listadoPersonas.push(nuevoDueño);
                listadoVehiculos[vehiculoATransferir[opcion - 1]].setDueño(listadoPersonas[listadoPersonas.length - 1]);
                puntos();
                console.log(".......................Transferido con exito......................")
                puntos();
                console.log(listadoVehiculos);
            }
        }
    } else {
        console.log("..................No existe persona con ese dni en la BD.........")
    }
}
