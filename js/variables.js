let cedula = 81475041
const PI = 3.1416

console.log(cedula);
console.log(PI)

/**number */
let edad = 15;

/** string - letras, debe ir en comillas dobles siempre */

let nombre="Pepito";

/**booleano - es identificable porque es tipo pregunta (true or false) */

let esMayor = true;
let carrera = null; /**se puede dejar vacío pero más adelante se podría cambiar */ /**NULL O UNDEFINED */


/**OPERADORES BASICOS */
// ARITMETICOS + - / * %

let num1 = 20;
let num2 = 5;

let suma = num1+num2;
console.log(" la suma de los numeros es "+suma);
console.log("la suma de "+num1+ " + "+num2+ " es: "+suma);

let resta = num1-num2;
console.log("la resta de "+num1+ " - "+num2+ " es: "+resta);




// DE ASIGNACIÓN = += -= *= /=
/**asignación simple */
let nombre1 = "Carlos";
//adición y/o asignación += ESTO QUEDARÍA COMO UNA SUMA
let contador = 0
contador += 5;
console.log(contador);

/**sustraciión */
let saldo = 100;
saldo -= 20;
console.log(saldo)

/**multiplicación */
let precioBase = 10;
precioBase *=1.16;
console.log(precioBase);

/**division */
let cantidadTotal = 50;
cantidadTotal /= 2;
console.log(cantidadTotal);

// DE COMPARACIÓN == === !== >> <=

// igualdad == (igualdad, no estrictamente qué tipo de dato es)
let numero1 = "10";
let numero2 = 10;
console.log(numero1==numero2) 

// igualdad estricta === 
console.log(numero1===numero2);

// desigualdad !=
console.log(numero1 != num2)

// desigualdad estricta !==
console.log(numero1 !== numero2);

// mayor que
console.log(num1 > num2);

// menos que
console.log(num1 < num2);

// mayor o igual >=
let nume1 = 18;
let nume2 = 9;
console.log(nume1 >= nume2);

// menor o igual <=
console.log(nume1 <= nume2);

// EXERCISE - asignación
let apellido = "Muñoz";
console.log("el nombre completo es: "+nombre+ " "+apellido);

// EXERCISE 2 - adición
let contador1 = 0;
contador1 += 10;
console.log(contador1);

// EXERCISE 3
let numeroA = "15";
let numeroB = 15;
console.log(numeroA == numeroB);
// esto es booleando daría true, compara valores mas no tipo

console.log(numeroA === numeroB);
// esto es booleano daría falso, uno es numero y el otro es string
