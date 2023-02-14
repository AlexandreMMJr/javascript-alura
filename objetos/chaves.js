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

const chavesDoObjeto = Object.keys(cliente); // Retorna um Array com todas as chaves que ja foram inicializadas nesse objeto. 

console.log(chavesDoObjeto); 

if (!chavesDoObjeto.includes("endereco")){
    console.error("Erro. É necessário ter um endereço cadastrado!");
}; // Agora que possui uma variavel com um Array do objeto, da pra usar o .includes para validar se o objeto possui a chave em questão.
