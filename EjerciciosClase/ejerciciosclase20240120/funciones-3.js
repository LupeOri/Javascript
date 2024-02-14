/**
 * Crear una función, partiendo del ejercicio 2, que calcule el promedio dentro de un arreglo pero dentro de un rango,
 * esta función recibe el arreglo, un punto de partida y uno de termino
 * y devuelve el promedio de los valores dentro del rango especificado.
 */

function promedioRango(numeros, puntoInicio, puntoTermino){
    if (numeros.length === 0 || puntoInicio < 0 || puntoTermino >= numeros.length){
        return 0;
    } else {

        let rango = 0;

        for (let i = puntoInicio; i <= puntoTermino; i++){
            rango += numeros[i];
        }

        return (rango/puntoTermino - puntoInicio + 1);
    }
}

/*ejemplo*/

const valores = [60, 80, 100, 120, 140];
const promedioPrimerosValores = promedioRango(valores, 0, 2);

console.log(promedioPrimerosValores);
