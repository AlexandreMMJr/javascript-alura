const notas = [10, 9.5, 8, 7, 6];

const notasAtualiadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10: nota + 1; // Outra forma do método for, só irá adicionar +1 na nota caso ela seja menor que 10, caso nao a nota continua 10.
}) // Outro método que não altera a Array original.

console.log(notasAtualiadas);

// Alterando String com map --

const nomes = ['ana Julia', 'Caio vinicius', 'BIA Silva'];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
})

// Outra forma de escrever o caso acima:
// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase()); -- Só funciona no caso da Arrow Function (=>)

console.log(nomesPadronizados);