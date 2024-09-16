const url = "https://restcountries.com/v3.1/all"

async function obtenerDatos(url) {
    const respuesta = await fetch(url)
    const data = await respuesta.json();
    console.log(data);
    data.forEach(element => {
        const tarjeta = document.querySelector('.seccionTarjeta');
        const templateTarjeta = document.querySelector("#templateTarjeta");
        const nuevaTarjeta = templateTarjeta.content.cloneNode(true);
        nuevaTarjeta.querySelector(".card-title").textContent = element.translations.spa.common;
        nuevaTarjeta.querySelector(".card-text").textContent = "Capital: " + element.capital;
        nuevaTarjeta.querySelector(".poblacion").textContent ="Poblacion: " + element
        nuevaTarjeta.querySelector(".area").textContent = "Area: " + element.area + "Km2";
        nuevaTarjeta.querySelector(".horario").textContent = "Poblacion: " + element.population ;
        const imgBandera = nuevaTarjeta.querySelector(".card-img-top");
        imgBandera.setAttribute("src", element.flags.png);
        imgBandera.setAttribute("alt", element.flags.alt);
        tarjeta.appendChild(nuevaTarjeta);  
    });

    
}
  
obtenerDatos(url);
