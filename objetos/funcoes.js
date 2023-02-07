const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["111122233", "222233334"],
};

cliente.saldo = 200;

cliente.efetuaPagamento = function (valor){
        if (valor > this.saldo) {
            console.log("Cliente sem saldo");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        };
};

cliente.efetuaPagamento(120);
