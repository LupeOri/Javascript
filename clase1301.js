/* 
1-Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}
 
/*
//Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.*/

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/*
//Crea un bucle para conseguir dormir contando ovejas.
Este bucle empieza en 0 y termina en 10.
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.
*/

for (let i = 0; i <= 10; i++) {
    if (i < 10) {
        console.log('Intentando dormir');
    } else {
        console.log('Dormido!');
    }
}

/*
// Dado el string 'vaca', darle la vuelta
const vaca = 'vaca';*/

const vaca = 'vaca';
const arrayVaca = vaca.split('');
const vacaReverse = arrayVaca.reverse().join("");

console.log(vacaReverse);

/*
// Dado el string 'perro', insertar guiones en medio de cada letra: 'p-e-r-r-o'
const perro = 'perro';
*/
const perro = 'perro'
const perroGuiones = perro.split('').join('-');
console.log(perroGuiones);

/*
Dibujar un triángulo de la siguiente manera:
*
**
***
****
*****
****
***
**
*
El número de asteriscos en el punto máximo es 5
*/

for (let i = 1; i <= 5; i++) {
    let parteuno = "*".repeat(i);
    console.log(parteuno);
}

for (let j = 4; j >= 1; j--) {
        partedos = "*".repeat(j);
        console.log(partedos);
}

/*
Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
*/
 const palabraUsuario = "Hola"
for (let i = 0; i < 10; i++){
console.log(palabraUsuario);
}

/*
// Dado el string 'perro', insertar guiones en medio de cada letra: 'p-e-r-r-o'
const perro = 'perro';
*/

const perruno = 'perro';
const perrdos = perruno.split("").join("-");

console.log(perrdos);

/*
Escribe un programa que utilice un bucle for para sumar todos los números pares del 1 al 50 e imprima el resultado en la consola.
*/

let resultado = 0;

for (let i = 2; i <= 50; i += 2) {
    resultado += i;
}

console.log(resultado);

/*
Crea un programa que utilice un bucle for para generar la tabla de multiplicar del 7. Imprime los resultados en la consola.
*/

let resultad = 0;

for (let i = 1; i <= 10; i++) {
    resultad += (7 * i + "\n");
}

console.log(resultad);
/*
Escribe un programa que utilice un bucle while para imprimir los números del 10 al 1 en la consola.
*/

let x = 10;

while (x >= 1) {
    console.log(x);
    x--;
}

/*
Escribe un programa que utilice un bucle while para imprimir los números del 1 al 10 en la consola.
*/ 

let y = 1;

while (y <= 10) {
    console.log(y);
    y++;
}