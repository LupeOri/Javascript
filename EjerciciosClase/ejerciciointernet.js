/*
Presenta un menú al usuario con las siguientes opciones:
1. Suma
2. Resta
3. Multiplicación
4. División
5. Salir

Pide al usuario que elija una opción ingresando el número correspondiente.
Si elige una operación (1-4), solicita dos números y realiza la operación seleccionada.
Muestra el resultado al usuario.
Si elige "Salir" (5), finaliza la ejecución del programa.
Si elige una opción inválida, muestra un mensaje de error y vuelve al paso 1.
*/

const prompt = require('prompt-sync')({ sigint: true });

function mostrarMenu() {
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');
    console.log('5. Salir');
}

while (true) {
    mostrarMenu();

    const opcion = prompt("Elija una opción del 1 al 5: ");

    if (opcion === '5') {
        console.log('Hasta luego!');
        break;  
    }

    if (opcion >= '1' && opcion <= '4') {
        const numeroUno = parseFloat(prompt("Ingrese el primer número"));
        const numeroDos = parseFloat(prompt("Ingrese el segundo número"));

        if (opcion === '1') {
            const suma = numeroUno + numeroDos;
            console.log(`El resultado de la suma es: ${suma}`);
        } else if (opcion === '2') {
            const resta = numeroUno - numeroDos;
            console.log(`El resultado de la resta es: ${resta}`);
        } else if (opcion === '3') {
            const multiplicación = numeroUno * numeroDos;
            console.log(`El resultado de la multiplicación es: ${multiplicación}`);
        } else if (opcion === '4') {
            const división = numeroUno / numeroDos;
            console.log(`El resultado de la división es: ${división}`);
        }
    } else {
        console.log('Opción inválida, elija una opción del 1 al 5');
    }
}