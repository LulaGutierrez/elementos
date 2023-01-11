
const $ = (element) => document.querySelector(element);


const body = $("body");
const h1 = $("h1");


const modoOscuro = confirm("¿Desea activar el modo oscuro?");
if (modoOscuro == true) {
    body.classList.add("fondoMoviesList");
    body.style.backgroundColor = "#241623";
}


h1.innerHTML = "LISTADO DE PELÍCULAS";
h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.padding = "20px";