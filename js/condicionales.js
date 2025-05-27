  // CONDICIONALES - booleanos (TRUE OR FALSE)

//IF - solo imprime si lo que está en el bloque de código del IF es verdadero, si NO cumple, no va a imprimir

if(true){
    console.log ("si, se cumplió la condición");
}
//EXAMPLE - COMO SI SE CUMPLE, VA A IMPRIMIR, SI NO SE CUMPLIERA, NO LA IMPRIME
if(10>1){
    console.log ("si, se cumplió la condición"); 
}
 
//EXAMPLE 2
miVariable = "hola" === "hola";
if (miVariable) {
    console.log("si, se cumplió la condición");
}

// SI NO SE CUMPLE LA CONDICIÓN PONEMOS ELSE, EJEMPLO
miVariable1 = true;
if (miVariable1) {
    console.log("si, se cumplió la condición");
}
else 
    console.log("no se cumplió la ccondición");

if (miVariable1) {
    console.log("si, se cumplió la condición");
} else if (miVariable) {
    console.log("si, se cumplió la condición")
}

//CON LO ANTERIOR ENTENDEMOS QUE: NO SE PUEDE USAR UN ELSE SI NO EXISTE UN IF - MIENTRAS QUE UN IF SI PUEDE IR SOLO.
// ------------------------------------

// EXAMPLE 2 - si ess Pepita, salude con Hola, Pepita! - si es Pepito, salude con Hello, Pepito! - de otra manera, salude a un desconocido

const name = "Anne";
if (name === "Pepita") {
    console.log("Hola, Pepita!");
    } else {
    console.log("hola, desconocido 1")
}

    if (nombre === "Pepito") {
console.log("Hello, Pepito!");
}

/* EXERCISE 
crear una función que reciba una palabra y si la palabra es "hola", imprimir por consola "HOLA"
*/

function fn(word) {
  if (word === "hola") {
    console.log("HOLA");
  } else{
    console.log("adiós");
  }
}
/*TOCA LLAMAR A LA FUNCIÓN PARA QUE IMPRIMA*/
fn("xxx"); /* IMPRIME ADIÓS PORQUE NO CUMPLE CONDICION QUE ES LA LINEA 54*/ 
fn("HOLA")/* IMPRIME ADIÓS PORQUE ES MAYUSCULA Y DEBE CUMPLIR LA LINEA 54*/ 
fn("hola");

// CONDICIONAL 2: switch (cambio) - estructura de control
miVariable = 1;
switch(miVariable){
    case 1:
        console.log("soy 1");
        break;
 case 2:
        console.log("soy 2");
        break;
        default: 
        console.log("no se cumplió ningún caso");
        break;
}
// AFTER "CASE" WE ALWAYS HAVE TU PUT "BREAK"
/*En palabras:El switch es una forma de elegir entre varias opciones según el valor de una variable. Es como una caja de interruptores: dependiendo del valor que reciba, activa una opción diferente.
¿Cómo funciona?
- Se evalúa el valor de una variable.
- Se compara con varias opciones (case).
- Cuando encuentra una coincidencia, ejecuta el código de ese caso.
- Si no encuentra ninguna coincidencia, puede ejecutar una opción por defecto (default). */

/* EXERCISE: crear una función que reciba una palabra
- si la palabra es "hola" - imprimir por console "HOLA"
- en caso contrario, imprima "adiós"
- crear 2 funciones: una debe utilizar dentro "if" y la otra debe usar "switch"
*/
function fn1(word) {
    if (word === "hola") {
        console.log("HOLA");
    } else {
        console.log("adiós");
    }
}
//SIEMPRE LLAMAR FUNCIÓN PARA QUE IMPRIMA
fn1("hola");
fn1("hello");

function fn2(word){
    switch (word){
        case "hola":
        console.log("case...HOLA");
        break;

        default:
            console.log("case...adiós");
            break;
    }
}
//LLAMAR FUNCIÓN:
fn2("hola");
fn2("adiós")

/*EXERCISE
-Crear una función con 3 parámetros:
- recibir un número
- recibir un otro
- reciibir una palabra
mostrar el resultado de las operaciones aritméticas básicas
*/
function calcular(num1, num2, operacion) {
  switch (operacion) {
    case "suma":
      console.log("Resultado de la suma:", num1 + num2);
      break;
    case "resta":
      console.log("Resultado de la resta:", num1 - num2);
      break;
    case "multiplicacion":
      console.log("Resultado de la multiplicación:", num1 * num2);
      break;
    case "division":
      if (num2 !== 0) {
        console.log("Resultado de la división:", num1 / num2);
      } else {
        console.log("Error: no se puede dividir entre cero.");
      }
      break;
    default:
      console.log("Operación no válida. Usa: suma, resta, multiplicacion o division.");
  }
}
//LLLAMAR FUNCIONES:
calcular(10, 5, "suma");            // Resultado de la suma: 15
calcular(10, 5, "resta");           // Resultado de la resta: 5
calcular(10, 5, "multiplicacion");  // Resultado de la multiplicación: 50
calcular(10, 5, "division");        // Resultado de la división: 2
calcular(10, 0, "division");        // Error: no se puede dividir entre cero
calcular(10, 5, "raiz");            // Operación no válida

/*LEER UN NOMBRE DE USUARIO Y UNA CONTRASEÑA
- SI EL USUARIO ES "pepa* Y LA PW ES "ABC123" mostrar "Bienvenida"
- DE OTRA MANERA, MOSTRAR: "Acceso denegado".
*/

function login(username, password) {
  if (username === "pepa" && password === "ABC123") {
    console.log("Bienvenida");
  } else {
    console.log("Acceso denegado");
  }
}

// Pruebas:
login("PEPA", "ABC123");   // Acceso denegado (por mayúscula en username)
login("pepa", "ABC123");   // Bienvenida
login("pepa", "abc123");   // Acceso denegado (clave incorrecta)


