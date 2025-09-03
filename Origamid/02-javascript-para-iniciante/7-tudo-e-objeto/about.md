# 🧠 Tudo é Objeto em JavaScript

## 📚 Índice

* [🔍 Introdução: Tudo é Objeto?](#-introdução-tudo-é-objeto)
* [🔤 Strings como Objetos Temporários](#-strings-como-objetos-temporários)
* [🔢 Números também se comportam como Objetos](#-números-também-se-comportam-como-objetos)
* [🔧 Propriedades de Funções](#-propriedades-de-funções)
* [🌐 Objetos do DOM (Document Object Model)](#-objetos-do-dom-document-object-model)
* [📋 Clipboard API](#-clipboard-api)
* [✅ Exercícios Comentados](#-exercícios-comentados)
* [🧠 Flashcards (Anki)](#-flashcards-anki)

---

## 🔍 Introdução: Tudo é Objeto?

JavaScript é uma linguagem baseada em objetos. Isso significa que:

* Praticamente **tudo é um objeto** ou se comporta como tal.
* Até mesmo tipos primitivos (`string`, `number`, `boolean`) podem **usar métodos** como se fossem objetos.
* Isso é possível graças ao **autoboxing**, uma técnica onde o JS **envolve temporariamente** um valor primitivo com seu objeto construtor (`String`, `Number`, etc).

---

## 🔤 Strings como Objetos Temporários

Embora `nome` abaixo seja uma `string` primitiva, podemos usar métodos como `.length` e `.charAt()`:

```js
let nome = 'Jean';

console.log(nome.length);       // 4
console.log(nome.charAt(1));    // 'e'
console.log(nome.replace('an', 'm')); // 'Jem'
```

### 🧩 O que acontece internamente?

```js
// Internamente, o JS faz:
nome = new String('Jean');
nome.charAt(1); // 'e'
nome = 'Jean'; // volta a ser primitivo após a operação
```

Esse processo se chama **autoboxing**.

---

## 🔢 Números também se comportam como Objetos

Assim como as strings, os números podem acessar métodos:

```js
let altura = 1.8;

console.log(altura.toString()); // "1.8"
console.log(altura.toFixed());  // "2"
```

### 🧩 Internamente:

```js
altura = new Number(1.8);
altura.toFixed(); // método do objeto Number
altura = 1.8; // volta ao valor primitivo
```

---

## 🔧 Propriedades de Funções

Funções também são **objetos** em JavaScript e possuem **propriedades**.

```js
console.log(addEventListener.length); // 2
```

📌 O `.length` de uma função indica **quantos argumentos formais** ela espera.

---

## 🌐 Objetos do DOM (Document Object Model)

Os elementos retornados via `document.querySelector()` são objetos especiais do navegador com métodos e propriedades:

```js
const button = document.querySelector('.btn');

console.log(button.classList);      // DOMTokenList com classes
button.classList.add('ativo');      // Adiciona classe
console.log(button.innerText);      // Texto visível do botão
```

⚠️ Esses objetos vêm de APIs do navegador (não fazem parte do JS puro), mas **se comportam como objetos JS**.

---

## 📋 Clipboard API

A API `navigator.clipboard` permite **interagir com a área de transferência** do usuário:

```js
const input = document.querySelector('input');
const buttonCopy = document.querySelector('#copy');

buttonCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(input.value)
    .then(() => {
      console.log('Texto copiado com sucesso!');
    })
    .catch(err => {
      console.error('Erro ao copiar:', err);
    });
});
```

### 📝 Requisitos:

| Recurso            | Explicação                          |
| ------------------ | ----------------------------------- |
| `navigator`        | Objeto global com info do navegador |
| `clipboard`        | Acesso à área de transferência      |
| `.writeText(text)` | Copia texto                         |
| `.readText()`      | Lê texto                            |
| Retorno            | Sempre uma `Promise`                |
| Segurança          | Requer HTTPS e interação do usuário |

---

## ✅ Exercícios Comentados

### Métodos de String:

```js
console.log('hi'.charAt(1));       // 'i'
console.log('hi'.length);          // 2
console.log('hi'.toUpperCase());   // 'HI'
```

### Métodos do DOM:

```js
const button = document.querySelector('.btn');

console.log(button.classList);     // objeto com lista de classes
console.log(button.innerText);     // texto visível do elemento

let span = document.querySelector('span');
button.appendChild(span);          // adiciona span como filho
console.log(button.innerHTML);     // retorna o HTML interno
button.addEventListener('click', () => {
  console.log('clicou');
});
```

---

## 🧠 Flashcards (Anki)

> 💡 Frente = pergunta/código
> 🧠 Verso = explicação detalhada

---

### 🃏 Flashcard 1

**Front:**

> Por que conseguimos acessar métodos como `.length` e `.charAt()` mesmo em valores primitivos como strings?
>
> ```js
> let nome = 'Jean';
> console.log(nome.length);      // ?
> console.log(nome.charAt(2));   // ?
> ```

**Back:**

> Porque o JavaScript usa **autoboxing**, convertendo temporariamente `'Jean'` em `new String('Jean')`. Isso permite acessar métodos como `.charAt()` e `.length`.
>
> Resultado:
>
> * `nome.length` → `4`
> * `nome.charAt(2)` → `'a'`

---

### 🃏 Flashcard 2

**Front:**

> O que significa o seguinte trecho de código e qual seu resultado?
>
> ```js
> let altura = 1.8;
> console.log(altura.toFixed());
> ```

**Back:**

> `toFixed()` retorna o número como **string arredondada**.
> Mesmo `altura` sendo primitivo, o JS converte para `new Number(1.8)` para chamar o método.
>
> Resultado: `'2'` (string)

---

### 🃏 Flashcard 3

**Front:**

> Qual a função e restrições da seguinte API?
>
> ```js
> navigator.clipboard.writeText('copiado!');
> ```

**Back:**

> A API copia texto para a área de transferência.
>
> Requisitos:
>
> * Precisa de HTTPS
> * Requer interação do usuário
> * Retorna uma `Promise`

---

### 🃏 Flashcard 4

**Front:**

> Qual é o retorno de `addEventListener.length`? O que isso representa?

**Back:**

> Retorna `2`, indicando que `addEventListener` espera dois argumentos:
>
> 1. Tipo do evento (ex: `'click'`)
> 2. Função a ser executada

---

### 🃏 Flashcard 5

**Front:**

> O que o método abaixo faz?
>
> ```js
> button.classList.add('ativo');
> console.log(button.classList.value);
> ```

**Back:**

> Adiciona a classe `ativo` ao elemento.
> `classList.value` retorna uma string com todas as classes atuais do elemento.

---
