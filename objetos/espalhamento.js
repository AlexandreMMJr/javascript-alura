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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone); // mesmo que : ligaParaCliente(cliente.telefone[0], cliente.telefone[1]); > o '...' espalha para o Array o comando seguinte.

const encomenda = {
    destinatario: cliente.nome,
    // Enves de:
    // rua: cliente.endereco.rua,
    // numero: cliente.endereco.numero,
    // apartamento: cliente.apartamento,
    // complemento: cliente.complemento,
    // >
    ...cliente.endereco,
};

console.log(encomenda);