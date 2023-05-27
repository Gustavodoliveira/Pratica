//Criando objetos

var bed = {

 name : 'Gustavo' ,
  age : [15,18,19,20] ,
  sex : m ,
}

bed.name
bed.sex
bed.age

//Fim

//Contructor functions
//criar funcoes para completar uma selecao  automatica

function ManNew(name,age,sex) {
    this.name = name ;
    this.age = age ;
    this.sex = sex ;
}

var man = new ManNew('gustavo',18,'man')

//toda vez q criar um novo objeto dentro da construction function tem q dar um nome de variavel diferente

//criando uma funcao para criar um novo objeto

function ManNew(name,age,sex){
  this.name = name ;
  this.age = age ;
  this.sex = sex ;
  this.andar = function () {
      alert('moving ');
}
}

//criando um novo objeto

var man = new ManNew('hyro',15,'masc')

//chamando o metodo incluido na function contructor acima ; 

man.andar ()