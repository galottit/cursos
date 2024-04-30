import * as rls from "readline-sync";
//import * as readlineSync from "readline-sync";

let valorProducto : number = rls.questionInt("Por favor, ingrse el monto del valor del producto: ");
let cantidadProducto : number = rls.questionInt("Por favor, ingrese la cantidad que desea comprar: ");

let valorTotal : number = valorProducto * cantidadProducto;
let valorConDescuento : number = valorTotal *  0.9;

if(valorProducto * cantidadProducto >= 1000){
    console.log("El precio de su compra es de $" + valorConDescuento);
}else{
        console.log("El precio de su compra es de $" + valorTotal + ". Recuerde que gastando más de $1000 tiene un 10% de descuento" );
}
