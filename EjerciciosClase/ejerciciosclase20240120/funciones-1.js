/**
 * Escribir una función que reciba una lista por parámetro y devuelva una copia de la lista
 */

function copia(lista) {
    return Object.assign([], lista);
}

const nombres = ['Juan', 'María', 'Carlos'];
const copiaNombres = copia(nombres);

console.log(copiaNombres);  