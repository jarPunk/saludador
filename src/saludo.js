export function saludar(nombre = '', genero = '', edad = null, idioma = 'es') {
    return nombre ? `Hola, ${nombre}` : 'Hola';
}
