const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo"); // O splice altera o array original, diferente do Slice
console.log(nomes);