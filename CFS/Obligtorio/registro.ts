import { Vehiculos, listadoPersonas, listadoVehiculos } from "./vehiculos";
import {Personas} from "./personas"

export class RegistroAutomotor {
    private vehiculos:Vehiculos[];
    private personas:Personas[];

    constructor(vehiculos:Vehiculos[], personas:Personas[]){
        this.personas = personas;
        this.vehiculos = vehiculos;
    }
}

export let registro:RegistroAutomotor = new RegistroAutomotor(listadoVehiculos, listadoPersonas);