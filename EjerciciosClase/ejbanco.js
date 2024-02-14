// Ejecuta "npm install" si no lo has hecho antes
/**
 * Tienes que crear una aplicación de banco.
 * El usuario tendrá una cantidad inicial de 100 euros.
 * El programa tendrá un menú que se dibujará y mostrará las siguientes opciones:
 *  1. Extraer dinero:  El programa pedirá al usuario una cantidad de dinero a extraer.
 *                      La cantidad a extraer no puede ser superior a la cantidad que tenga el usuario.
 *                      La cantidad será restada del saldo del usuario.
 *  2. Ingresar dinero: El programa pedirá al usuario una cantidad de dinero a ingresar.
 *                      Esta cantidad se sumará al saldo del usuario.
 *  3. Ver movimientos: Mostrará una lista de los movimientos realizados por el usuario.
 *  4. Salir:           Finalizará la ejecución de la aplicación.
 * 
 * Para pedir una entrada al usuario se usará la función `prompt("Mensaje a enseñar")`
 */

const prompt = require('prompt-sync')({ sigint: true });
let saldo = 100;
let movimientos = [];

// Esta función dibuja el menú
function menu() {
    console.log('Menu ATM');
    console.log('1. Extraer dinero.');
    console.log('2. Ingresar dinero');
    console.log('3. Ver movimientos');
    console.log('4. Salir');
}

// Empieza el ejercicio debajo

while (true) {
    menu(); 

    const opcion = prompt("Elija una opcion del 1 al 4: ");

    if (opcion === '1') {
        let extraccion = prompt("Ingrese la cantidad a extraer: ");
        while (extraccion <= 0 || extraccion > saldo) {
            console.log("La cantidad ingresada es mayor que su saldo disponible.");
            extraccion = prompt("Ingrese la cantidad a extraer: ");
        }
        saldo -= extraccion;
        console.log(`Ahora su saldo es ${saldo} euros.`);
        movimientos.push(`Extracción: ${extraccion} euros`);
    } else if (opcion === '2') {
        let ingreso = Number.parseInt(prompt("Introduzca la cantidad a ingresar: "));
        while (ingreso <= 0) {
            console.log("Cantidad inválida, ingrese un monto mayor a cero.");
            ingreso = prompt("Introduzca la cantidad a ingresar: ");
        }
        saldo += ingreso;
        console.log(`Ahora su saldo es ${saldo} euros.`);
        movimientos.push(`Ingreso: ${ingreso} euros`);
    } else if (opcion === '3') {
        if (movimientos.length === 0) {
            console.log('No hay movimientos para mostrar.');
        } else {
            console.log('Sus movimientos son los siguientes:');
            for (let i = 0; i < movimientos.length; i++) {
                console.log(movimientos[i]);
            }
        }
    } else if (opcion === '4') {
        console.log('Hasta la próxima');
        break;
    } else {
        console.log('Opción no válida. Por favor, elija una opción del 1 al 4.');
    }
}