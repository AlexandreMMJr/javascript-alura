function apresentar(nome) {
    return  `meu nome é ${nome}`;
}

// Criando a função da forma Arrow

const apresentarArrow = nome => `meu nome é ${nome}`;

const somaArrow = (num1, num2) => num1 + num2;

console.log(somaArrow(1, 2));

// Arrow function com mais de 1 linha de código

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somento números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

