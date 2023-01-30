// var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;

console.log(area)

var area;

// let

let altura2 = 10;
let comprimento2 =14;
let area2;
let forma = 'retângulo'

if (forma === 'retângulo') {
    area2 = altura2 * comprimento2;
} else {
    area2 = altura2 * comprimento2 / 2;
}

console.log(area2)

// const

const altura3 = 15;
const comprimento3 = 21;
const forma2 = 'quadrado';
const area3 = 0;

/* if (forma2 === 'quadrado') {
    area3 = altura3 * comprimento3;
} else {
    area3 = altura3 * comprimento3 / 2;
}

Não da pra alterar variavel const, por isso
seria necessario iniciar como let 

*/

console.log(area3)