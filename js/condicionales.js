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
*/
