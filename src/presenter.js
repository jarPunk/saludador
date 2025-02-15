import { saludar } from './saludo.js';

const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaSelect = document.querySelector("#idioma");
const saludoDiv = document.querySelector("#saludo");

function mostrarSaludo() {
    const nombre = nombreInput.value;
    const genero = generoSelect.value;
    const edad = Number.parseInt(edadInput.value);
    const idioma = idiomaSelect.value;
    
    saludoDiv.innerText = saludar(nombre, genero, edad, idioma);
}

document.querySelector("button").addEventListener("click", mostrarSaludo);
