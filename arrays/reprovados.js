const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { // tem que nomear o primeiro para acessar o segundo, então se não for usar, pode colocar um '_'
    return medias[indice] < 7;
})

console.log(reprovados);