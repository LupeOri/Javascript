/**
 * Crear una función que devuelva el promedio o media de un listado de números.
 * Si el listado está vacío, devolver 0.
 */

function media(numeros){
    if (numeros.length === 0){
        return 0;
    } else {

        let suma = 0;

        for (let i = 0; i < numeros.length; i++){
            suma += numeros[i];
        }

        return (suma/numeros.length);
    }
}

const numerosPrueba = [5, 50, 500, 5000, 50000];
const mediaPrueba = media(numerosPrueba);

console.log(mediaPrueba);
