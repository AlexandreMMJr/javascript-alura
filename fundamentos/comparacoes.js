// == (comparação implícita)

const numero = 5;
const texto = "5";

console.log(numero == texto)

console.log(typeof numero)
console.log(typeof texto)

const palavra = "10";
const numero2 = 10;

console.log(numero2 === palavra)

// == só compara o valor
// === compara o valor e o tipo de dado


// === (comparação explícita)

Number()
String()

// Normalmente se usa apenas ===, caso precise fazer
// a outra forma de comparação, usar o modo explícito.