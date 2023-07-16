//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const listaNomes = [];

//Add os nomes à lista
listaNomes.push("Van");
listaNomes.push("Valdeylson");
listaNomes.push("Margot");
listaNomes.push("Ellie");
listaNomes.push("Aydan");
listaNomes.push("Vanderkley");
listaNomes.push("Luiza");
listaNomes.push("Isabela");
listaNomes.push("Kelly");

//Criar uma variável p/ armazenar nomes com a letra V
let nomesComV = [];

//Percorrer cada nome na lista
for (let i = 0; i < listaNomes.length; i++) {
    let nome = listaNomes[i];
    if(nome[0] === "V"){
        nomesComV.push(nome);
    }
}

//imprimir lista 
console.log(nomesComV);