const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["111122233", "222233334"],
};

cliente.endereco = {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: ["ap 222","ap 223"],
};

console.log(cliente);
console.log(cliente.endereco.complemento[1]);
