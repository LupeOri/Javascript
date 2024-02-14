// Ejecuta "npm install"
/**
 * Crear un programa que, dado un número, te calcule el factorial de ese número.
 * Por ejemplo:
 * 5 => 5 * 4 * 3 * 2 * 1 = 120
 */

// Empieza el ejercicio debajo

const prompt = require('prompt-sync')({ sigint: true });

const number = parseInt(prompt('Introduzca un número: '));

if (number < 0) {
    console.log('El factorial no está definido para números negativos.');
} else {
    let factorial = 1; // Inicializamos el factorial en 1

    for (let i = 1; i <= number; i++) {
        factorial *= i; // Multiplicamos factorial por cada número del 1 al number
    }

    console.log(`El factorial de ${number} es: ${factorial}`);
}