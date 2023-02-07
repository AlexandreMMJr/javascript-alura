const notas = [7, 7, 8, 9];

// const novasNotas = notas; < Isso não funciona, os dois viram o mesmo Array.

const novasNotas = [...notas]; // '...' Operador de espalhamento.

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);