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
