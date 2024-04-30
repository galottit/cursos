import * as rls from "readline-sync";

let nombreUsuario : string = rls.question("Escriba el nombre de usuario: ");
let claveUsuario : string = rls.question('Escriba su contraseña: ', {hideEchoBack: true});

if(nombreUsuario == "Juan" && claveUsuario == "claveJuan"){
  console.log("El usuario y contraseña son correctos");
}else{
  console.log("Usuario o clave incorrecots. Por favor revisarlos")
}
