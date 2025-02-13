import { saludar } from './saludo.js'; // Importa la función 'saludar'

const nombreInput = document.querySelector("#nombre"); // Obtén el campo de entrada para el nombre
const generoSelect = document.querySelector("#genero"); // Obtén el campo de selección para el género
const saludoDiv = document.querySelector("#saludo"); // Obtén el elemento donde mostrar el saludo

// Función para mostrar el saludo al hacer clic en el botón
function mostrarSaludo() {
    const nombre = nombreInput.value; // Obtén el valor ingresado en el campo de texto
    const genero = generoSelect.value; // Obtén el género seleccionado
    saludoDiv.innerText = saludar(nombre, genero); // Muestra el saludo con el nombre y género
}

// Agregar el evento al botón
document.querySelector("button").addEventListener("click", mostrarSaludo);
