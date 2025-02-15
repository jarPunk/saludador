import { saludar } from './saludo.js'; // 

const nombreInput = document.querySelector("#nombre"); 
const generoSelect = document.querySelector("#genero"); 
const edadInput = document.querySelector("#edad"); 
const saludoDiv = document.querySelector("#saludo"); 

function mostrarSaludo() {
    const nombre = nombreInput.value; 
    const genero = generoSelect.value; 
    const edad = Number.parseInt(edadInput.value); 

    saludoDiv.innerText = saludar(nombre, genero, edad); 
}


document.querySelector("button").addEventListener("click", mostrarSaludo);
