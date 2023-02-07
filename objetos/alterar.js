const pessoa = {
    nome: "Luma",
    profissão: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone); // Retorna undefined

pessoa.telefone = "28999411189";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa; 

// Pode-se manipular um objeto dentro de uma const
// Porém não se pode atribuir esse const a outra variavel.
