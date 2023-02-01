const nomes = ["Evaldo", "Mari", "Camis"];

// Formas de utilizar as funções callback :

nomes.forEach(function (nome) {
    console.log(nome);
})

nomes.forEach((nome) => {
    console.log(nome);
})

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);