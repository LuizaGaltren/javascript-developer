/*

2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1


*/

const { gets, print } = require('./funcoes-aux-ex2');

const n = gets(); //numero de elementos que eu vou receber
let maiorNumeroPar = 0; // maior numero par q eu ainda n sei qual é. = 0;
let menorNumeroImpar = 0; // menor numero impar q n sei qual é. = 0;

for (let i = 0; i < n; i++) { //trecho p percorrer o código N vezes(quantidade de numeros q tiver na string)
    const numero = gets(); // para avaliar o numero que eu estiver percorrendo no momemnto

    if (numero % 2 === 0) { // esse numero é par?
        if (numero > maiorNumeroPar) { // o numero verificado é maior q o numero par?
            maiorNumeroPar = numero; // se sim, então o maiorPar = numero
        }
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        } else if ( numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }
}

print(`O maior número par é: ${maiorNumeroPar}`);
print(`O menor número ímpar é: ${menorNumeroImpar}`);