/*

//ADICIONAR UM ITEM NA LISTA

const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan');

alunos[3] = 'Vinícius';

console.log(alunos);

*/

/*

//PARA REMOVER UM ITEM

const alunos = ['1', '2', '3'];
console.log(alunos.pop());

*/

/*
//PARA REMOVER UM ITEM QUE ESTÁ NO COMEÇO DA LISTA

const alunos = ['1', '2', '3'];

console.log(alunos.shift());
console.log(alunos);

*/


/*

//LISTA DINAMICA TAMANHO 5 ITENS

//Soma as notas e divide a nota por 5
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / 5);

*/

/*

//For Loop

const nome = 'Luiza Santos';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}

*/

//EXERCICIO COM O QUE FOI APRENDIDO ACIMA

const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;

console.log(media);