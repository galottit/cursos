let arrProductos = ["lapices","voligomas","cartulinas"];
let arrPrecios = [500, 1000, 900]
let arrCant = [100, 50, 200]

let cantidad = document.querySelector("div input").value;
document.querySelector("div button").addEventListener("click", ()=>{
    let cantidad = document.querySelector("div input").value;
    if( cantidad>0 && (arrCant[0]-cantidad)>0){
        comprar(cantidad);
    } else {
        alert("pone bien la cantidad!!")
    }

})

function comprar(cantidad) {
    document.getElementById("total").innerHTML=cantidad*arrPrecios[0];

}