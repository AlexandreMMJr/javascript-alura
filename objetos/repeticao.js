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

for (let chave in cliente){
    let tipo = typeof cliente[chave]; // typeof de um Array retorna um objeto.

    if (tipo !== 'object' && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }

    //Exemplos de acesso:
    //console.log(chave); > Informa a chave no objeto
    //console.log(cliente[chave]); // Informa o valor do objeto
};
