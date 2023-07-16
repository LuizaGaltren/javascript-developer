/*

1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor( marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

const uno = new Carros('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));