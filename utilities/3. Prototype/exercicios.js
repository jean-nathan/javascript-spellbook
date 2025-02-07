// exercicios

// 1. Cria uma funcao construtora de Pessoa

function People(fisrtname, lastname, age) {
  this.fisrtname = fisrtname;
  this.lastname = lastname;
  this.age = age;
}

People.prototype.showFullName = function() {return this.fisrtname.concat(" ", this.lastname)} 

const newPeople = new People('Jean', 'Nathan', 27) ;

// console.log(People.prototype);
// console.log(newPeople.showFullName());

/************************************************/

// 2. Liste os metodos acessados por dados criados com NodeList, HTMLCollection, Document

const elementsLi = document.querySelectorAll('li');

// 3. Listar os métodos e propriedades próprias de NodeList
//console.log(Object.getOwnPropertyNames(NodeList.prototype));

const elements = document.getElementsByTagName('li');

// Listar os métodos e propriedades próprias de HTMLCollection
//console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));

// Listar os métodos e propriedades próprias de Document
//console.log(Object.getOwnPropertyNames(Document.prototype));

/************************************************/

// 4. Liste os construtores dos dados abaixo;

// li; li.click; li.innerText, li.value, li.hidden, li.offsetLeft, li.click()

const li = document.querySelector('li');

const methods = ['hidden', 'innerText', 'click', 'offsetLeft'];

methods.forEach(method => {
  const methodName = method;
  const methodConstructor = li[methodName].constructor.name
  console.log(methodConstructor);
});


console.log(li.hidden.constructor.name) // Boolean
console.log(li.constructor.name) // HTMLElement
console.log(li.innerText.constructor.name) // String
console.log(li.click.constructor.name) // Function
console.log(li.offsetLeft.constructor.name) // Number
//console.log(li.click().constructor.name) // Undefined

/************************************************/

// 5. Qual o construtor do dado abaixo:

console.log(li.hidden.constructor.name.constructor.name) // O constructor do valor retornado "Boolean" é String.
