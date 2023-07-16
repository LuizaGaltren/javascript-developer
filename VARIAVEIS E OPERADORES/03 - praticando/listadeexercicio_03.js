/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


/*  

1. Ler o preço normal de etiqueta do produto (precoEtiqueta)
2. Ler o código da condição de pagamento (condicaoPagamento)
3. Se condicaoPagamento for igual a 1:
     - Calcular o desconto de 10% (desconto = precoEtiqueta * 0.10)
     - Calcular o valor a ser pago (valorPago = precoEtiqueta - desconto)
4. Senão, se condicaoPagamento for igual a 2:
     - Calcular o desconto de 15% (desconto = precoEtiqueta * 0.15)
     - Calcular o valor a ser pago (valorPago = precoEtiqueta - desconto)
5. Senão, se condicaoPagamento for igual a 3:
     - Valor a ser pago é o preço normal de etiqueta (valorPago = precoEtiqueta)
6. Senão:
     - Calcular o juros de 10% (juros = precoEtiqueta * 0.10)
     - Calcular o valor a ser pago (valorPago = precoEtiqueta + juros)
7. Exibir o valor a ser pago (valorPago)


*/



const precoEtiqueta = 100;

const condicaoPagamento = 4;

if(condicaoPagamento === 1) {
    console.log(precoEtiqueta - ( precoEtiqueta* 0.1));
} else if (condicaoPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (condicaoPagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}




/*

Mas poderia ser assim também, mais linha mas achei mais claro

// Ler o preço normal de etiqueta do produto
let precoEtiqueta = parseFloat(prompt("Digite o preço normal de etiqueta do produto:"));

// Ler o código da condição de pagamento
let condicaoPagamento = parseInt(prompt("Digite o código da condição de pagamento:"));

let desconto, valorPago, juros;

if (condicaoPagamento === 1) {
  // À vista Débito, recebe 10% de desconto
  desconto = precoEtiqueta * 0.1;
  valorPago = precoEtiqueta - desconto;
} else if (condicaoPagamento === 2) {
  // À vista no Dinheiro ou PIX, recebe 15% de desconto
  desconto = precoEtiqueta * 0.15;
  valorPago = precoEtiqueta - desconto;
} else if (condicaoPagamento === 3) {
  // Em duas vezes, preço normal de etiqueta sem juros
  valorPago = precoEtiqueta;
} else {
  // Acima de duas vezes, preço normal de etiqueta mais juros de 10%
  juros = precoEtiqueta * 0.1;
  valorPago = precoEtiqueta + juros;
}

console.log("O valor a ser pago é: " + valorPago.toFixed(2));




*/