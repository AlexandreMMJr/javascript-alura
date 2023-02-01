const notas = [10, 6.5, 8, 7.5]
let somaNotas = 0;

for (let x = 0; x < notas.length; x++){
    somaNotas += notas[x]
}

console.log(somaNotas);

mediaTotal = somaNotas / notas.length;

console.log(mediaTotal);