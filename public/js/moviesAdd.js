console.log("its alive");

const $ = (element) => document.querySelector(element);


const h1 = $("h1");
const section = $("section");
const article = $("article");


h1.innerHTML = "AGREGAR PELÍCULAS";
h1.classList.add("titulo");


article.classList.add("fondoTransparente");


section.classList.add("fondoCRUD");