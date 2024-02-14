/*

// Vamos a declarar 3 arrays y queremos saber la longitud de cada uno de ellos.
var avengers = ['Spiderman', 'AntMan', 'Hulk'];
var mutants = ['Wolverine', 'Ciclops', 'Storm'];
var defenders = ['Daredevil', 'IronFist', 'Luke Cage'];

*/

var avengers = ['Spiderman', 'AntMan', 'Hulk'];
var mutants = ['Wolverine', 'Ciclops', 'Storm'];
var defenders = ['Daredevil', 'IronFist', 'Luke Cage'];

var longAvengers = avengers.length;
var longMutants = mutants.length;
var longDefenders = defenders.length;

/* 
* Ejercicio 3
* → E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
*/

let sinGuiones ="EL RAYO ES EL MEJOR";
var fraseSinEspacios = sinGuiones.split(" ").join("").split("").join("-");
console.log(fraseSinEspacios);

/*
1-split(" "): divide la cadena en un array de palabras [EL, RAYO, ES, EL, MEJOR] 
2-join(""): quita los espacios entre los elementos del array
3-divide cada cadena de letras en caracteres individuales
4-añade guines entre cada letra que son esos caracteres individuales
*/

/* 
* Ejercicio 4
* → La piramide - imprime por consola:
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

for (let i = 1; i<=9; i++){
    let resultado = "";
    for (let j = 1; j <= i; j++){
        resultado += i;
    }
   console.log(resultado); 
}

/* 
* Ejercicio 5
* → La piramide Invertida- imprime por consola:
999999999
88888888
7777777
666666
55555
4444
333
22
1
*/

for (let i = 9; i >=1; i--){
    let resultado = "";
    for (let j = 1; j <= i; j++){
        resultado += i;
    }
   console.log(resultado); 
}


