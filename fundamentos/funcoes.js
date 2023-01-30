// Função declarada
function imprimeTexto(texto) {
    console.log(texto)
}

// Chamando a função

texto = "Ola";

imprimeTexto(texto);
imprimeTexto("Oi");

// Formas de escrita para as funções
y = 10;
z = 20;

function soma() {
    x = y + z;
    return x;
}

imprimeTexto(soma());

function subtrair() {
    const resultado = 20 - y;
    return resultado;
}

console.log(subtrair())

b = 10;
c = 10;

function multiplicar(b, c){
    a = b * c;
    return a;
}

console.log(multiplicar(b, c));

// Algumas funções matemáticas

console.log(Math.round(4.3)) // Arredonda para o mais proximo
console.log(Math.ceil(4.3)) // Arredonda para o mais alto
console.log(Math.floor(5.9)) // Arredonda para o mais baixo
console.log(Math.trunc(4.3)) // Desconsidera o decimal
console.log(Math.pow(4, 2)) // Elevado
console.log(Math.sqrt(64)) // Raiz quadrada
console.log(Math.min(1, 3, 6, -1)) // Retorna o menor valor
console.log(Math.max(1, 5, 10, 3)) // Retorna o maior valor
console.log(Math.random()) // Retorna aleatorio entre 0 e 1
    