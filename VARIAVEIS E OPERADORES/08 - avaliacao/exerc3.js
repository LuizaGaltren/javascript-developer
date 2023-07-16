/*

3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário  a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00

*/

const {gets, print} = require('./funcoes-aux-ex3');

const valorBrutoSalario = gets();
const adicionalBeneficios = gets();

let percentualImposto = 0;

if (valorBrutoSalario <= 1100.00) {
    percentualImposto = 5.00;
} else if (valorBrutoSalario <= 2500.00) {
    percentualImposto = 10.00;
} else {
    percentualImposto = 15.00;
}

const valorImposto = (valorBrutoSalario * percentualImposto) / 100;
const salarioTransferido = valorBrutoSalario - valorImposto + adicionalBeneficios;

print(salarioTransferido.toFixed(2));
