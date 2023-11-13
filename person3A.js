
class Person{
    
    idade = 0 //ficará 0 para todos
    constructor(nome){ //função que será executada sempre que criar uma pessoa nova
        this.nome = nome; //PROPRIEDADE

    }
    //ação para definir a idade, sem precisar declarar como na instancia anterior, pois assim pode inserir string
    //criar ação


    setarIdade(novaIdade){
        //verificando se é um número
        if (typeof novaIdade == "number") {
            this.idade = novaIdade
        }
    }

}

let p1 = new Person("Paula");
let p2 = new Person("Maria");
let p3 = new Person("Clóvis");

p1.setarIdade(35); //testar com string
console.log(`${p1.nome} tem ${p1.idade} anos`)

p2.setarIdade(33)
console.log(`${p2.nome} tem ${p2.idade} anos`)





//PARTE 2 INSTANCIA
//CRIANDO AS PESSOAS (INSTANCIANDO COM O TEMPLATE ACIMA)
//(VARIAVEL DE ESCOPO LOCAL)
//QUANDO CRIA O OBJETO, JÁ APARECE PARA COLOCAR NOME E IDADE, POIS ESTÁ NO TEMPLATE (CONSTRUCTOR)
//cada um tem nome e idade diferente
// let p1 = new Person("Paula");
// let p2 = new Person("Maria");
// let p3 = new Person("Clóvis");

// //a propriedade existe, só não tem valor, declarar valor
// p1.idade = 23
// p2.idade = 34
// p3.idade = 26


//defi

//MOSTRANDO NO CONSOLE O RESULTADO
// console.log(`${p1.nome} tem ${p1.idade} anos`)
// console.log(`${p2.nome} tem ${p2.idade} anos`)
// console.log(`${p3.nome} tem ${p3.idade} anos`)