export function saludar(nombre = '', genero = '', edad = null, idioma = 'es') {
    const hora = new Date().getHours();
    let saludo = '';
    
    if (idioma === 'es') {
        if (hora >= 6 && hora < 12) saludo = 'Buenos días';
        else if (hora >= 12 && hora < 20) saludo = 'Buenas tardes';
        else saludo = 'Buenas noches';

        let tratamiento = '';
        if (edad !== null && edad > 30) {
            if (genero === 'masculino') tratamiento = 'Sr. ';
            else if (genero === 'femenino') tratamiento = 'Sra. ';
        }

        if (nombre) saludo += `, ${tratamiento}${nombre}`;
    } else if (idioma === 'en') {
        if (hora >= 6 && hora < 12) saludo = 'Good morning';
        else if (hora >= 12 && hora < 20) saludo = 'Good afternoon';
        else saludo = 'Good evening';

        let tratamiento = '';
        if (edad !== null && edad > 30) {
            if (genero === 'masculino') tratamiento = 'Mr. ';
            else if (genero === 'femenino') tratamiento = 'Mrs. ';
        }

        if (nombre) saludo += `, ${tratamiento}${nombre}`;
    }

    return saludo;
}
