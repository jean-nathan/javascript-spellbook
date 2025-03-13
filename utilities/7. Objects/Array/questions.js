const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrao'];

// Remova o primeiro valor de comidas e coloque em uma variavel.
const primeiroValorExcluido = comidas.shift();
console.log(primeiroValorExcluido)

// Romova o ultimo valor de comidas e coloque em uma variavel.
const ultimoValorExcluido = comidas.pop()
console.log(ultimoValorExcluido);

// Adicione 'Arroz' ao final do array.
comidas.push('Arroz')
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao inicio da array.
comidas.unshift('Peixe', 'Batata')
console.log(comidas);

/* BREAKLINE */

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// Arrume os estudantes em ordem alfabetica
console.log(estudantes.sort());
// Obs: Quando o nome comeca com a mesma letra o codigo outra o segundo caractere de cada nome pra ver qual vem primeiro e assim vai indo, assim como numero

// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

/* BREAKLINE */

let html = `<section>Sobre</div><section>Produto</div><section>Contato</div></section>`

// Substitua section por ul e div com li, utilizando split e join
html.split('section').join('ul').split('div').join('li');

/* BREAKLINE */

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// Remova o último carro, mas antes de remover, salve uma copia da array original em outra variavel

const copyCarros = carros.slice();
console.log(copyCarros);

carros.pop()
console.log(carros);
