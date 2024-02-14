/*  partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:

1- Número de enlaces de la página
*/

const enlaces = document.querySelectorAll('a');

const totalEnlaces = enlaces.length;

console.log(totalEnaces);

/*
2- Dirección a la que enlaza el penúltimo enlace
*/
const penultimoEnlace = enlaces[enlaces.length - 2];
console.log('Dirección del penúltimo enlace:', penultimoEnlace.href);

/*
Numero de enlaces que enlazan a http://prueba
*/
const enlaceHttp = document.querySelectorAll('a[href="http://prueba"]');
const totalEnlaceHttp = enlaceHttp.length;
console.log(totalEnlaceHttp);
/*
Número de enlaces del tercer párrafo
*/

const body = document.querySelector('body');
const tercerParrafo = body.children[2]; /*o body:nth-child(3)*/ 
const numEnlacesTercerParrafo = (tercerParrafo.querySelectorAll('a')).length;
console.log(numEnlacesTercerParrafo);

