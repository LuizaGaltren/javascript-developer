// objeto é uma coleção de valores. Ele agrupa valores

//(uma função dentro de um objeto chama-se METODO)

//sintaxe de um objeto literal.
// um objeto é uma coleção dinamica de chave e valor.
//definiu o objeto 'luiza'

//nesse caso, tem 2 chaves 'nome e idade' e 2 valores atribuidos a elas

/*
const pessoa = {
    nome: 'Luiza S',
    idade: 30,
    
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


pessoa.descrever();
*/





 /*********************************************** */


/*

//COMO INSTÂNCIO UMA PESSOA NOVA. EX:

class Pessoa {
    nome;
    idade;
    
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const luiza = new Pessoa();
luiza.nome = 'Luiza S';
luiza.idade = 30;

const isabela = new Pessoa();
isabela.nome = 'Isabela P';
isabela.idade = 26;

luiza.descrever();
isabela.descrever();

*/


//constructor() é o acontece quando uma pessoa é instanciada.

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const luiza = new Pessoa('Luiza', 30);
const isabela = new Pessoa('Isabela', 26);

luiza.descrever();
isabela.descrever();

console.log(luiza);