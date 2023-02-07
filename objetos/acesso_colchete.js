const cliente = {
    nome: "André",
    idade: 32,
    cpf: "123456",
    email: "aaaa@bbbb.com.br"
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]}`);

console.log(`Os 3 primeiros digitos do CPF do cliente ${cliente["nome"]} são ${cliente["cpf"].substring(0, 3)}`) // Se usa colchete quando não se sabe o que vai acessa;

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
