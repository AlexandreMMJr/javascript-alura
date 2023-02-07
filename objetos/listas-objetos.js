const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["111122233", "222233334"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: ["ap 222","ap 223"],
}, {
    rua: "R. Clarisse Lispector",
    numero: 24,
    apartamento: false,
    complemento: "chalé",
}];

console.log(cliente);
console.log(cliente.enderecos[1].rua);

const listaApenasAps = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasAps);