// boolean

const usuarioLogado = true
const contaPaga = false

// truthy ou falsy

// 0 => false
// 1 => true

// Exemplos do que o JS considera como tipo falso ou verdadeiro.
console.log(0 == false) // Se fosse '===' seria false, pois não é igual.
console.log("" == false)
console.log(1 == true)

// null ==> vazio ou nada

let varNull = null;
let minhaVar;

console.log(minhaVar) // Inicializada porém não foi atribuido nada;
console.log(varNull) // Iniciada e possui valor null;

let numero = 10;
let texto = "Alura";

console.log(typeof numero)
console.log(typeof texto)

let numero2;
let texto2 = null;

console.log(typeof numero2)
console.log(typeof texto2)