// como declarar uma função
// escrevendo function + a função () e {}
// () é onde fica o parametro

/*function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Renan'); //função invocada 
sayMyName('Vitor')





//******************************************** */






/* function quadrado(valor){
    return valor * valor; //return é para devolver a funcão
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

//explicando o código
//linha 14 - chamou a função 'quadrado'
//14 - passou o parametro 'valor'
//15 - fez o q tinha q fazer 'valor * valor'
//15 - e return retorna o resultado





/******************************************************** */

/* function incrementarjuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarjuros(100, 10));
console.log(incrementarjuros(100, 15));
console.log(incrementarjuros(100, 20));

*************************************************/


// código principal, colocar sempre dentro de uma função
// a função vai chamar main


function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}


function classificarImc(imc) {
    
if (imc < 18.5) {
    return 'Você está abaixo do peso.';
} else if (imc >= 18.5 && imc < 25) {
    return  'Você está acima do peso';
} else if (imc >= 30 && imc < 40) {
    return 'Você está obeso';
} else {
    return 'Você está em obesidade grave';
}

}

function main(){
    const peso = 55;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();


/*
função anonima:

(function (){
    const peso = 55;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();


não chama o main

*/

