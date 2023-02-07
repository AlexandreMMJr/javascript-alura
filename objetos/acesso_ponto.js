const cliente = {
    nome: "André",
    idade: 32,
    cpf: "123456",
    email: "aaaa@bbbb.com.br"
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade}`);

console.log(`Os 3 primeiros digitos do CPF do cliente ${cliente.nome} são ${cliente.cpf.substring(0, 3)}`)