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

    // Modificar el saludo según el género
    if (genero === 'masculino') {
        saludo += ', señor';
    } else if (genero === 'femenino') {
        saludo += ', señora';
    }

    // Añadir el nombre al saludo si está presente
    if (nombre) {
        saludo += `, ${nombre}`;
    }

    return saludo;
}
