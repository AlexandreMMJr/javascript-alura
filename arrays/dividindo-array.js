const alunos = [
    'João', 
    'Juliana',
    'Ana', 
    'Caio', 
    'Lara', 
    'Marjorie', 
    'Guilherme', 
    'Aline', 
    'Fabiana', 
    'Andre', 
    'Carlos', 
    'Paulo', 
    'Bia', 
    'Vivian', 
    'Isabela', 
    'Vinícius', 
    'Renan', 
    'Renata', 
    'Daisy', 
    'Camilo'
];

const sala1 = alunos.slice(0, 10)  // O ultimo parametro não é pego, e sim o ultimo anterior (9)
const sala2 = alunos.slice(10) // Não precisa colocar o fim do Array, ele ja entende que é pra pegar até o final

console.log(alunos)
console.log(sala1)
console.log(sala2)

// Também pode ser:
// const sala1 = alunos.slice(0, alunos.length / 2);
// const sala2 = alunos.slice(alunos.length / 2);