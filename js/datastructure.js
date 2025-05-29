/* ESTRUCTURA DE DATOS */

// Variable - cajita donde solo guardo UN VALOR
/* miVariable = 1 */
// Array Vector  Lista Matiz
// Arreglo (Array) ----- [any data: strings, boolean, numbers,undefined. null, otros arreglos []] - mi arreglo es ccomo una cajita donde puedo guardar más de un valor y esta es su SINTAXIS: 
/* ---- let miArreglo = ["abc", 10, true, undefined, null] ---*/
/* LOS ARREGLOS TIENEN VARIAS PARTES: asignación (miArreglo), asignación (=), empieza y termina con corchete cuadrado y se ACOSTUMBRA A HACER CONSTANTE (CONS) y lo que hay en corchete se llaman OBJETOS y los INDICES son las posiciones en que van los OBJETOS, ejemplo: "abc" sería posición 0 (la posición siempre empieza en cero) - null sería la última (5*) - ver ejemplo en sintaxis /

/* Ejemplo de arreglo anidado o matriz [] */ 
let personas = [
    ["Ana", 25], // INDICE 0
    ["Luis", 30], // INDICE 1
    ["Carlos", 22], // INDICE 2 
    ["Maria", 28] // INDICE 3 
];
// PERSONA [2] SERIA CARLOS - PERO DENTRO DE CARLOS, CARLOS SERÍA [0] Y LA EDAD SERÍA [1] ENTONCES:
personas [2][0] // da "Carlos"
personas[2][1] // da "22"
personas [2] // da "Carlos, 22" porque pido acceso a toda la fila 

/*EJEMPLO SIMPLE: STRINGS*/
let miArreglo = [
   "Monday",   // 0 - INDICE
   "Tuesday",  // 1 - INDICE
   "Wednesday", // 2 - INDICE
   "Thursday", // 3 - INDICE
   "Friday",  // 4 - INDICE
   "Saturday", // 5 - INDICE
   "Sunday", // 6 - INDICE 
];
console.log(miArreglo); // IMPRIME TODOS LOS DÍAS QUE ES EL ARREGLO
console.log(miArreglo[3]); // IMPRIME EL ELEMENTO QUE ES Thursday
// -------------------------------------------------------
// Loops, ciclos, bucles, iteraciones: como su nombre indica: ejecuta un bloque de código REPETIDAMENTE mientras se cumpla una condición o al recorrer una colección de datos - CICLO O BUCLE: EJECUCIÍN REPETIDA DE INSTRUCCIONES // ITERACIÓN: CADA VUELTA INDIVIDUAL DE UN LOOP

miArreglo = [
   "Monday",   // 0 - INDICE
   "Tuesday",  // 1 - INDICE
   "Wednesday", // 2 - INDICE
   "Thursday", // 3 - INDICE
   "Friday",  // 4 - INDICE
   "Saturday", // 5 - INDICE
   "Sunday", // 6 - INDICE 
];

for(let index = 0; index < 7; index++){
console.log(miArreglo[index])
}

