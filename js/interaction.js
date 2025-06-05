/* INTERACCIÓN */

// INPUT - ENTRADA : EL USUARIO NOS ENTREGA VALORES
/*let entrada; 
//entrada = prompt ( );
entrada = prompt("Escriba su nombre"); 

// OUTPUT - SALIDA : 
console.log(entrada);

document.write("Usted ingresó el nombre: " + entrada); //document write escribe en la página, no en consola - no se usa ya

alert("Usted ingresó el nombre: " + entrada);
*/
// PEDIR AL USUARIO QUE ADIVINE UN NÚMERO ENTRE 1 Y 5 - DAR MAXIMO DOS INTENTO - SI EL USUARIO GANA, MOSTRAR "¡GANASTE!, ADIVINASTE EL NÚMERO SECRETO" Y SI EL USUARIO PIERDE, MOSTRAR "PERDISTE, TUVISTE DOS INTENTOS"
/*
const numeroSecreto = 2;
const numeroLimiteIntentos = 2;
let numeroIntentosUsuario = 0;
let mensaje = "";
let adivinado = false;

while (numeroIntentosUsuario < numeroLimiteIntentos) {
  let numeroUsuario = prompt("Escriba un número entre 1 y 5");
  numeroUsuario = Number(numeroUsuario); // Convertir a número

  numeroIntentosUsuario++;

  if (numeroUsuario === numeroSecreto) {
    mensaje = "¡GANASTE!, ADIVINASTE EL NÚMERO SECRETO";
    adivinado = true;
    break; // Termina el ciclo porque acertó
  }
}

// Si no adivinó
if (!adivinado) {
  mensaje = "PERDISTE, TUVISTE 2 INTENTOS";
}

alert(mensaje);
*/ 
