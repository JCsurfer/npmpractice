debugger;
Array.from('foo')  // [f,o,o]
Array.isArray([])  // true
Array.of(1,2,3)    // [1, 2, 3]

/*******************************
* Transformadores
*******************************/

// pop - Elimina el último elemento de una matriz 
let numbers = [1,2,3,4];
numbers.pop() // 4
numbers // [1, 2, 3]

// push - Añade uno o más elementos al final de una matriz
let numbers = [1,2,3,4];
numbers.push(2) // 5
numbers // [1, 2, 3, 4, 5]

// reverse - Invierte el orden de los elementos de una matriz 
let numbers = [1,2,3,4];
numbers.reverse(); // [4, 3, 2, 1]

// shift - Elimina el primer elemento de una matriz y retorna este elemento.
let numbers = [1,2,3,4];
numbers.shift(); // 1
numbers // [2, 3, 4]

// sort - Ordena los elementos de una matriz.
let numbers = [4, 2, 3, 1];
numbers.sort(); 
numbers // [1, 2, 3, 4]

// splice - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
let numbers = [1,2,3,4,5,6];
numbers.splice(0, 1) // [1]
numbers // [2, 3, 4, 5, 6]

numbers.splice(0, 0, 1) // []
numbers // [1, 2, 3, 4, 5, 6]

// unshift - Añade uno o más elementos al comienzo de una matriz y retorna la nueva longitud de la matriz unidimensional.
let numbers = [1,2,3,4,5,6];
numbers.unshift(0); // 7
numbers // [0, 1, 2, 3, 4, 5, 6, 7]

/*******************************
* Accesors
*******************************/

// concat - Devuelve una nueva matriz , unida con otra matriz
let numbers = [0, 1, 2, 3, 4];
let numbersRest = [5, 6, 7, 8];

let all = numbers.concat(numbersRest); // [0, 1, 2, 3, 4, 5, 6, 7, 8]

// join - Une todos los elementos de una matriz en una cadena
let numbers = [0, 1, 2, 3, 4];
numbers.join("") // "0,1,2,3,4"

// slice - extrae una seccion de una matriz y devuelve una nueva matriz
let numbers = [0, 1, 2, 3, 4]; 
numbers.slice(0, 2) // [0, 1]

// indexOf - devuelve el primer indice del valor encontrado
let numbers = [0, 1, 2, 3, 4, 1]; 
numbers.indexOf(1) // 1

// lastIndexOf - devuelve el ultimo indice del valor encontrado
let numbers = [0, 1, 2, 3, 1]; 
numbers.lastIndexOf(1) // 4

/*******************************
* iteradores
*******************************/

// filter - crea una nueva matriz en base a la condicion de filtrado
let numbers = [0, 1, 2, 3, 1]; 
numbers.filter(function(number) {
    return number > 2;
}) // [3, 4, 5, 6]

// forEach - ejecuta una funcion por cada iteracion
let numbers = [0, 1, 2, 3, 1]; 
numbers.forEach(function(number) {
    return number * 2
})

// map - crea una nueva matriz con los resultados de cada invocacion
let numbers = [0, 1, 2, 3, 1]; 
let result = numbers.map(function(number) {
    return number * 2;
})

result // [0, 2, 4, 6, 2]
