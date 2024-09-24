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
import { Persona } from "./personas";
let opcion: number = 0;

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
            bajaVehiculo();
            break;
        case 3:
            transferenciaVehiculo();
            break;
        case 4:
            console.log("Saliendo.....")
    }
} while (opcion !== 4);


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
    let nuevaMarca: string = "";
    while (nuevaMarca.length < 3 || nuevaMarca.length >= 15) {
        nuevaMarca = rls.question("Ingrese la marca del vehículo:   ");
    }
    let nuevoModelo: string="";
    while (nuevoModelo.length < 3 || nuevoModelo.length >= 15){
        nuevoModelo = rls.question("ingrese el modelo del vehículo:   ");
    }
    let nuevoAño: number= 1;
    while(nuevoAño >2024 || nuevoAño < 1920){
        nuevoAño = rls.questionInt("ingrese el año de fabricación del vehículo:   ");
    }
    let nuevoDni = rls.questionInt("Ingrese el dni del titular:  ");
    if (dniCargado(nuevoDni)[1]) {
        let nuevoVehiculo: Vehiculo = new Vehiculo(tipos[nuevoTipo], nuevaMarca, nuevoModelo, nuevoAño, listadoPersonas[dniCargado(nuevoDni)[0]]);
        listadoVehiculos.push(nuevoVehiculo);
    } else {
        cargarNuevaPersona(nuevoDni);
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
    if (buscarVehiculo(dni, false,)[1]) {
        let estaSeguro: number = imprimirListado(dni, "dar de baja?:       ")[1];

        if (estaSeguro == 1) {
            listadoVehiculos.splice(buscarVehiculo(dni, false)[0][opcion - 1], 1);
            puntos();
            console.log("...............borrado con exito.......................");
            puntos();
        }
    } else {
        console.log("..................No existe persona con ese dni en la BD.........");
    }
}
function transferenciaVehiculo() {
    console.log("Ingrese el dni del vendedor");
    let dniVendedor: number = rls.questionInt("");
    let vehiculoATransferir: number[] = []; // creo un array donde voy a meter los indices de los vehículos que estan a nombre de este dni

    if (dniCargado(dniVendedor)[1]) {
        let resultado: [number, number] = imprimirListado(dniVendedor, "Transferir ");
        if (resultado[1] == 1) {
            console.log("Ingrese dni del comprador: ")
            let dniComprador: number = rls.questionInt("");
            if (dniCargado(dniComprador)[1]) {
                listadoVehiculos[buscarVehiculo(dniVendedor, false)[0][opcion - 1]].setDueño(listadoPersonas[dniCargado(dniComprador)[0]]);
                puntosTransferencia();
            } else {
                cargarNuevaPersona(dniComprador);
                listadoVehiculos[buscarVehiculo(dniVendedor, false)[0][opcion - 1]].setDueño(listadoPersonas[listadoPersonas.length - 1]);
                puntosTransferencia();
            }
        }
    } else {
        console.log("..................No existe persona con ese dni en la BD.........")
    }
}
function dniCargado(dni: number): [number, boolean] {
    let nuevaPersona: number = listadoPersonas.length + 1;
    let estaCargado: boolean = false;
    listadoPersonas.forEach((persona, indice) => { //recorro todas las personas para ver si ya existe ese dni
        if (persona.getDni() == dni) {
            nuevaPersona = indice;
            estaCargado = true;
        }
    })
    return [nuevaPersona, estaCargado];
}
function cargarNuevaPersona(dni: number) {
    let nuevoNombre: string = "";
    while(nuevoNombre.length < 3 || nuevoNombre.length >15){
        nuevoNombre = rls.question("Ingrese el nombre del titular:   ");
    }
    let nuevoApellido: string = "";
    while(nuevoApellido.length < 3 || nuevoApellido.length >15){
        nuevoNombre = rls.question("Ingrese el nombre del titular:   ");
    }
    let nuevoDueño: Persona = new Persona(nuevoNombre, nuevoApellido, dni);
    listadoPersonas.push(nuevoDueño);
}
function puntosTransferencia() {
    puntos();
    console.log(".......................Transferido con exito......................")
    puntos();
}
function buscarVehiculo(dni: number, imprimir: boolean): [number[], boolean, number] {
    let existeDueño: boolean = false;
    let vehiculoATratar: number[] = [];
    let nuemeroVehiculo: number = 1;
    for (let i: number = 0; i < listadoVehiculos.length; i++) {
        if (listadoVehiculos[i].getDueño().getDni() == dni) {
            if (imprimir) {
                console.log(nuemeroVehiculo + "- " + listadoVehiculos[i].getTipo() + " " + listadoVehiculos[i].getmarca() + " " + listadoVehiculos[i].getModelo() + " " + listadoVehiculos[i].getAño());
            }
            nuemeroVehiculo++;
            vehiculoATratar.push(i); //guardo los indices en el array
            existeDueño = true;
        }
    }
    return [vehiculoATratar, existeDueño, nuemeroVehiculo];
}
function puntos() {
    console.log(".........................................................");
}
function imprimirListado(dni: number, texto: string): [number, number] {

    do {
        puntos();
        console.log("Que vehículo quiere " + texto)
        buscarVehiculo(dni, true);
        opcion = rls.questionInt("");
    } while (opcion > buscarVehiculo(dni, false)[2] || opcion <= 0);
    let estaSeguro: number = 0;
    do {
        console.log("Seguro que quiere " + texto + listadoVehiculos[buscarVehiculo(dni, false)[0][opcion - 1]].getTipo() + " " + listadoVehiculos[buscarVehiculo(dni, false)[0][opcion - 1]].getmarca() + " " + listadoVehiculos[buscarVehiculo(dni, false)[0][opcion - 1]].getModelo() + " " + listadoVehiculos[buscarVehiculo(dni, false)[0][opcion - 1]].getAño());
        console.log("1- Si");
        console.log("2- No");
        estaSeguro = rls.questionInt("");
    } while (estaSeguro >= 3 || estaSeguro <= 0)
    return [opcion, estaSeguro]
}