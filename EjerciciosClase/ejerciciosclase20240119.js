/*

1. Genera una función que devuelva la suma de dos números
2. Genera una función que reciba un array de números y un número y devuelva las veces que aparece ese número
3. Genera una función que reciba un array y sobre ese array puedas realizar las siguientes acciones bajo demanda:
       a. Buscar el número de coincidencias de un elemento dado en la lista
       b. Buscar la posición de la primera coincidencia del elemento en la lista, sin usar funciones propias de arrays
       c. Filtrar la lista dada una función que determina si un elemento debe ser filtrado o no.
       d. Swap: recibe dos números (origen, destino), que son posiciones de la lista, invertir el orden desde el origen
           al destino. Por ejemplo opera([1, 2, 3, 4]).swap(1, 3) => [1, 4, 3, 2]. Se pueden usar funciones de los arrays
  
 */

/*ejercicio 1*/

function suma(a, b){
    return a + b;
}

console.log (suma(9, 8));

/*ejercicio2*/

function contarRepeticiones(array, num){
     let veces = 0;
     for (i = 0; i<array.length; i++){
        if (array[i] === num){
            veces++;
        }
     }
     return veces;


}

const lista = [9, 10, 9, 9, 8, 2, 7, 10, 10, 3];
const buscarNum = 10;

console.log(contarRepeticiones(lista, buscarNum));

/*ejercicio 3*/

function accionesArray(Array){

    Array = this.Array;

    function cantCoincidencias(this.Array, num){
        let cant = 0;
        for (let j = 0; j<this.Array.length; j++){
           if (this.Array[i] === num){
               cant++;
           }
        }
        return cant;
   
   
   };

function verPosicionCoincidenciaUno(this.Array, num){
    if (this.Array.length[i] === num){
        return i;
    } else {
        return "No se encuentra el elemento en esta lista";
    }
};
 function filtrar(this.Array, num) {

    if 

 }
}
    

