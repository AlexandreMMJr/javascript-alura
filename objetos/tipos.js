const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["111122233", "222233334"],
};

console.log(cliente);
console.log(cliente.telefone[1]);

delete cliente.telefone[0];

console.log(cliente);
// O lugar deletado do Array retorna <1 empty item>

