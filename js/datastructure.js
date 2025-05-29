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

for(let index = 0; index < miArreglo.length; index++){
console.log("for -", miArreglo[index])
}


// IMPRIMIR POR CONSOLA LOS NÚMEROS DEL 1 AL 100 con WHILE

let i = 0; // variable global porque está fuera de código

while(i< miArreglo.length){
   console.log("while - ", miArreglo[i]);
   i++;
}


// EXAMPLE USANDO FOR
//Imprimir en consola los primeros 5 múltiplos de 2 (es decir: 2, 4, 6, 8, 10).

for (let i = 1; i <= 5; i++) {
  console.log(i * 2);
}

// PEDIR AL USUARIO QUE ADIVINE UN NÚMERO ENTRE 1 Y 5 - DAR MAXIMO DOS INTENTO - SI EL USUARIO GANA, MOSTRAR "¡GANASTE!, ADIVINASTE EL NÚMERO SECRETO" Y SI EL USUARIO PIERDE, MOSTRAR "PERDISTE, TUVISTE DOS INTENTOS"

// Número secreto entre 1 y 5
const numeroSecreto = Math.floor(Math.random() * 5) + 1;

// Contador de intentos
let intentos = 0;

// Variable para guardar la respuesta del usuario
let respuesta;

// Ciclo que se repite mientras haya intentos y no acierte
while (intentos < 2) {
  respuesta = prompt("Adivina un número entre 1 y 5:");

  // Convertimos la respuesta a número
  let numeroUsuario = Number(respuesta);

  intentos++;

  if (numeroUsuario === numeroSecreto) {
    alert("¡GANASTE!, ADIVINASTE EL NÚMERO SECRETO");
    break; // Salimos del ciclo porque ganó
  }
}

if (respuesta != numeroSecreto) {
  alert("PERDISTE, TUVISTE DOS INTENTOS");
}

