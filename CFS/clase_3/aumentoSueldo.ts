import * as rls from "readline-sync";

var valorSueldo = rls.questionInt("Ingrese su sueldo actual en $: ");

if (valorSueldo <= 0){
    console.log("Ingrese un valor de sueldo correcto")
} else if(valorSueldo <= 15000){
    console.log("se le aplicará un aumneto del 20%. A partir de ahora usted cobrará $" + valorSueldo * 1.2); 
} else if(valorSueldo <= 20000){
    console.log("se le aplicará un aumneto del 10%. A partir de ahora usted cobrará $" + valorSueldo * 1.1);
} else if(valorSueldo <= 25000){
    console.log("se le aplicará un aumneto del 5%. A partir de ahora usted cobrará $" + valorSueldo * 1.05);
} else {
    console.log("Usted gana mucho, no recibirá aumento. Seguirá cobrando: $" + valorSueldo);
}
