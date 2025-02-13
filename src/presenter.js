import { saludar } from './saludo.js'; // Importa la función 'saludar'

const nombreInput = document.querySelector("#nombre"); // Obtén el campo de entrada para el nombre
const saludoDiv = document.querySelector("#saludo"); // Obtén el elemento donde mostrar el saludo

// Función para mostrar el saludo al hacer clic en el botón
function mostrarSaludo() {
    const nombre = nombreInput.value; // Obtén el valor ingresado en el campo de texto
    saludoDiv.innerText = saludar(nombre); // Muestra el saludo con el nombre
}

// Agregar el evento al botón
document.querySelector("button").addEventListener("click", mostrarSaludo);
