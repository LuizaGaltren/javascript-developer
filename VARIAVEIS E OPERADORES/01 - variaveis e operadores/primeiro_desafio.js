/* Faça um programa para calcular o valor gasto de combustível em uma viagem

Voce terá 3 variavéis. Sendo elas:
- preço do combustível
- gasto médio de combustivel do carro por km
- distancia em km

Imprima no console o valor que será gasto para realizar esta viagem

 */ 

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580; 

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));