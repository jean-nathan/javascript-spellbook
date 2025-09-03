# 📦 Objetos em JavaScript

## Índice

* [🧱 O que são Objetos](#-o-que-são-objetos)
* [🔧 Propriedades e Métodos](#-propriedades-e-métodos)
* [✨ Métodos com Sintaxe ES6+](#-métodos-com-sintaxe-es6)
* [📦 Organização e Reutilização](#-organização-e-reutilização)
* [📍 Dot Notation Get e Set](#-dot-notation-get-e-set)
* [🧬 Herança e Prototype](#-herança-e-prototype)
* [🧠 Flashcards Elaborados (Formato Anki)](#-flashcards-elaborados-formato-anki)

---

## 🧱 O que são Objetos

Objetos são coleções de pares `chave: valor` que armazenam tanto **propriedades** (variáveis) quanto **métodos** (funções).

```js
let quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
};

console.log(quadrado.area(5));      // 25
console.log(quadrado.perimetro(5)); // 20
```

> 🔹 `this` refere-se ao próprio objeto, permitindo acessar suas propriedades internas.

---

## 🔧 Propriedades e Métodos

* **Propriedades**: valores armazenados no objeto (ex: `lados: 4`)
* **Métodos**: funções associadas ao objeto (ex: `area()`)

---

## ✨ Métodos com Sintaxe ES6+

Forma abreviada e mais limpa para declarar funções dentro de objetos:

```js
let quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
};
```

---

## 📦 Organização e Reutilização

Objetos ajudam a organizar o código em estruturas lógicas e reutilizáveis.

```js
console.log(Math.PI);        // Propriedade do objeto Math
console.log(console.log);    // Método do objeto console
```

> No VS Code: azul indica propriedades; roxo indica métodos.

---

## 📍 Dot Notation Get e Set

### ✅ Dot Notation Get

Acessar propriedades ou métodos com ponto:

```js
let menu = {
  width: 800,
  height: 50,
  backgroundColor: '#EAD'
};

let bg = menu.backgroundColor; // Get
console.log(bg); // '#EAD'
```

### ✏️ Dot Notation Set

Alterar ou adicionar valores:

```js
menu.backgroundColor = '#AC3'; // Alterar propriedade
menu.color = 'blue';           // Nova propriedade
```

---

## 🧬 Herança e Prototype

Todos os objetos herdam de `Object.prototype`, recebendo métodos como:

```js
let menu = { width: 800 };

menu.hasOwnProperty('width');  // true
menu.hasOwnProperty('height'); // false
```

> 🔍 `hasOwnProperty()` verifica se a propriedade é direta do objeto (não herdada).

---

## 🧠 Flashcards Elaborados (Formato Anki)

---

**Front:**

```js
// O que é um objeto em JavaScript?
let pessoa = {
  nome: 'João',
  idade: 30,
  falar: function() {
    return 'Olá!';
  }
};
```

**Back:**
Um objeto é uma coleção de pares chave-valor. No exemplo, `nome` e `idade` são propriedades (dados) e `falar()` é um método (função). Objetos organizam dados e comportamentos relacionados.

---

**Front:**

```js
// Como acessar o valor da propriedade 'idade'?
let usuario = {
  nome: 'Ana',
  idade: 25
};
```

**Back:**
Usa-se `usuario.idade` para acessar a propriedade, retornando `25`. Isso é conhecido como **Dot Notation Get**.

---

**Front:**

```js
// Qual a diferença entre propriedade e método?
let produto = {
  nome: 'Caneta',
  preco: 2.5,
  mostrarPreco: function() {
    return this.preco;
  }
};
```

**Back:**

* `nome` e `preco` são **propriedades** (armazenam dados).
* `mostrarPreco()` é um **método**, pois é uma função dentro do objeto.

---

**Front:**

```js
// Qual o valor retornado e o papel do 'this'?
let carro = {
  rodas: 4,
  descricao() {
    return `Este carro tem ${this.rodas} rodas.`;
  }
};

carro.descricao();
```

**Back:**
Retorna `"Este carro tem 4 rodas."`
`this` referencia o próprio objeto `carro`, permitindo acessar suas propriedades de dentro dos métodos.

---

**Front:**

```js
// O que acontece se usar 'rodas' ao invés de 'this.rodas'?
let carro = {
  rodas: 4,
  descricao() {
    return `Este carro tem ${rodas} rodas.`;
  }
};
```

**Back:**
Dá erro: `rodas is not defined`. Sem `this`, o JS busca uma variável `rodas` no escopo global ou local, que não existe.

---

**Front:**

```js
// Resultado de obj.area(3) e obj.perimetro(3)?
let obj = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
};
```

**Back:**

* `obj.area(3)` → `9` (3×3)
* `obj.perimetro(3)` → `12` (4×3 usando `this.lados`)

---

**Front:**

```js
// Como alterar e adicionar propriedades?
let menu = {
  width: 800,
  backgroundColor: '#FFF'
};
```

**Back:**

```js
menu.backgroundColor = '#000'; // altera valor existente  
menu.height = 60;              // adiciona nova propriedade  
```

---

**Front:**

```js
// Qual o valor de 'bg' após estas operações?
let menu = {
  backgroundColor: '#EAD'
};

let bg = menu.backgroundColor;
menu.backgroundColor = '#AC3';
```

**Back:**
`bg` permanece `'#EAD'` porque armazenou uma cópia do valor original, não uma referência ao objeto.

---

**Front:**

```js
// Como acessar método do Math e propriedade do console?
console.log(Math.PI);
console.log(console.log);
```

**Back:**

* `Math.PI` acessa a propriedade constante π.
* `console.log` é o método para exibir mensagens no console.

---

**Front:**

```js
// O que verifica menu.hasOwnProperty('width')?
let menu = { width: 800 };
```

**Back:**
Verifica se `width` é uma propriedade **direta** de `menu`. Retorna `true`. Se fosse herdada, retornaria `false`.

---

**Front:**

```js
// Explique herança em objetos JavaScript.
```

**Back:**
Todos os objetos herdam propriedades e métodos do seu protótipo (`Object.prototype`), como `toString()` e `hasOwnProperty()`. Essa é a herança prototípica do JavaScript.

---

**Front:**

```js
// Por que podemos usar menu.hasOwnProperty mesmo sem declarar?
let menu = { width: 800 };
```

**Back:**
Porque `menu` herda de `Object.prototype`, que possui o método `hasOwnProperty()`. Esse é o mecanismo de herança prototípica do JS.

---
