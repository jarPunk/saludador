export function saludar(nombre = '', genero = '', edad = null, idioma = 'es') {
    const hora = new Date().getHours(); // Obtener la hora actual

    let saludo = '';
    
    // Determinar el saludo según la hora
    if (hora >= 6 && hora < 12) {
        saludo = 'Buenos días';
    } else if (hora >= 12 && hora < 20) {
        saludo = 'Buenas tardes';
    } else {
        saludo = 'Buenas noches';
    }

    // Añadir el nombre al saludo si está presente
    if (nombre) {
        return `${saludo}, ${nombre}`;
    }

    return saludo;
}
