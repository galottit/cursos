import { Vehiculo, listadoPersonas, listadoVehiculos } from "./vehiculos";
import {Persona} from "./personas"

export class RegistroAutomotor {
    private vehiculos:Vehiculo[];
    private personas:Persona[];

    constructor(vehiculos:Vehiculo[], personas:Persona[]){
        this.personas = personas;
        this.vehiculos = vehiculos;
    }
}

export let registro:RegistroAutomotor = new RegistroAutomotor(listadoVehiculos, listadoPersonas);