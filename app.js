
console.log("El archivo script.js está cargado correctamente.");

// Función para validar y formatear el texto de entrada
function validarInput() {
    const input = document.getElementById('inputTexto');
    const texto = input.value;

    // Convertir a minúsculas, eliminar acentos y caracteres no permitidos
    const textoValidado = texto
        .toLowerCase()
        .normalize('NFD') // Descomponer caracteres acentuados
        .replace(/[\u0300-\u036f]/g, '') // Eliminar marcas de acento
        .replace(/[^a-z\s]/g, ''); // Eliminar caracteres no permitidos
    
    input.value = textoValidado;
}

// Función para encriptar el texto
function encriptar() {
    const input = document.getElementById('inputTexto').value;
    const output = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputTexto').value = output;
}

// Función para desencriptar el texto
function desencriptar() {
    const input = document.getElementById('inputTexto').value;
    const output = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputTexto').value = output;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const output = document.getElementById('outputTexto');
    output.select();
    document.execCommand('copy');
}

// Añadir los event listeners a los botones
document.getElementById('encriptarBtn').addEventListener('click', encriptar);
document.getElementById('desencriptarBtn').addEventListener('click', desencriptar);
document.getElementById('copiarBtn').addEventListener('click', copiarTexto);
