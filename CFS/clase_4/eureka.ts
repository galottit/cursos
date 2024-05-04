import * as rls from "readline-sync";
let claveReal : string = "eureka";
let intentos : number = 0;
let claveUsuario : string = rls.question('Escriba su contraseña: ', {hideEchoBack: true});
const cantidadIntentos : number = 3;
let autorizado : boolean = false;

for (intentos = 2; intentos > 0; intentos--){
    if(claveReal == claveUsuario){
        intentos = 0;
        autorizado = true;
    } else {
        claveUsuario= rls.question("Contraseña incorrecta, le quedan " + intentos +" intentos.  Vuelva a ingresar su contraseña: ", {hideEchoBack: true});
    }
}
if (autorizado){
    console.log("pusiste la clave correcta");
} else {
    console.log("te quedaste sin intentos"); 
}