const animais = document.getElementById('animais') // Seleciona pelo ID

console.log(animais.innerText) // Vai retornar os textos dos elementos

// Se não encontrar, vai retornar null
const naoExiste = document.getElementById('animaiss')
console.log('naoExiste', naoExiste) 

// Seleciona todas as gridSection e retorna um HTMLCollection
const gridSection = document.getElementsByClassName('grid-section')
console.log('gridSection', gridSection)

// Seleciona todas as ULs, e retorna um HTMLCollection
const ul = document.getElementsByTagName('ul');
console.log(ul[0])

//# Seletor Geral Único

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.Hz

const animais2 = document.querySelector('.animais');

const contato = document.querySelector('#contato');

const ultimoItem = document.querySelector('.animais-lista li:last-child');

const linkCSS = document.querySelector('[hrefˆ="https//"]');

const primeiroUl = document.querySelector('ul');

// Busca dentro da Ul apenas

const navItem = primeiroUl.querySelector('li');

console.log({
  animais,
  contato,
  ultimoItem,
  linkCSS,
  primeiroUl,
  navItem
});

