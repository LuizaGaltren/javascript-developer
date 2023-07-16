/*Faça um programa para calcular o valor gasto de combustível em uma viagem

Voce terá 5 variavéis. Sendo elas:

1 - preço do etanol
2 - Preço da gasolina
3 - O tipo de combustivel que está no seu carro
4 - gasto médio de combustivel do carro por km
5 - distancia em km da viagem

Imprima no console o valor que será gasto para realizar esta viagem

*/

const precoEtal = 5.79;
const precoGasolina = 6.66
const kmPorLitro = 10;
const distanciaEmKm = 100;

const tipoDoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoDoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtal;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

