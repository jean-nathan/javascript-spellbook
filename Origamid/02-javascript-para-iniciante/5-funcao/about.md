# 📘 Funções em JavaScript

## 📚 Índice

* [🔧 O que são Funções?](#-o-que-são-funções)
* [📨 Parâmetros e Argumentos](#-parâmetros-e-argumentos)
* [🧠 Funções como Cidadãos de Primeira Classe](#-funções-como-cidadãos-de-primeira-classe)
* [📦 Funções como Parâmetros (Callbacks)](#-funções-como-parâmetros-callbacks)
* [🔒 Escopo e Escopo Léxico](#-escopo-e-escopo-léxico)

  * [🔹 Escopo](#-escopo)
  * [🔹 Escopo Léxico](#-escopo-léxico)
* [🎣 Hoisting de Funções](#-hoisting-de-funções)
* [🧠 Flashcards (Anki)](#-flashcards-anki)

---

## 🔧 O que são Funções?

Funções são **blocos de código reutilizáveis** que executam uma tarefa específica.

```js
function saudacao() {
  console.log('Olá!');
}
saudacao(); // Chama a função
```

Elas podem:

* Executar ações
* Retornar valores
* Ser atribuídas a variáveis

---

## 📨 Parâmetros e Argumentos

Funções podem receber **parâmetros** (na definição) e receber **argumentos** (valores) na chamada:

```js
function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3)); // 5
```

* `a`, `b`: parâmetros
* `2`, `3`: argumentos

---

## 🧠 Funções como Cidadãos de Primeira Classe

Em JavaScript, funções são **"first-class citizens"**:

* Podem ser armazenadas em variáveis
* Podem ser passadas como argumentos
* Podem ser retornadas de outras funções

```js
const saudacao = function () {
  console.log('Oi!');
};
```

---

## 📦 Funções como Parâmetros (Callbacks)

Uma **callback** é uma função passada como argumento para outra função.

```js
function processar(dado, callback) {
  callback(dado);
}

processar('JS', function (info) {
  console.log('Processando ' + info);
});
```

São comuns em:

* Manipulação de arrays (`forEach`, `map`)
* Eventos (`addEventListener`)
* Operações assíncronas (promises, `setTimeout`)

---

## 🔒 Escopo e Escopo Léxico

### 🔹 Escopo

Escopo define **onde uma variável pode ser acessada**.

```js
function exemplo() {
  const mensagem = 'Olá!';
  console.log(mensagem);
}
exemplo();
// console.log(mensagem); // ❌ erro: fora do escopo
```

### 🔹 Escopo Léxico

Funções acessam variáveis do **escopo onde foram criadas**, não onde são chamadas.

```js
function externa() {
  const nome = 'Jean';
  function interna() {
    console.log(nome);
  }
  interna();
}
externa();
```

---

## 🎣 Hoisting de Funções

Funções **declaradas com `function`** sofrem hoisting: são movidas para o topo do escopo.

```js
teste(); // Funciona

function teste() {
  console.log('OK!');
}
```

➡️ Já as funções atribuídas a variáveis **não** são içadas da mesma forma:

```js
teste2(); // ❌ erro

const teste2 = function () {
  console.log('Erro!');
};
```

---

## 🧠 Flashcards (Anki)

💡 Estilo: frente = pergunta e/ou código com pergunta explícita | verso = explicação completa e didática.

---

**Front:**

```js
O que são funções em JavaScript e para que servem?
```

**Back:**

Funções são blocos de código que executam tarefas específicas. Permitem reutilização, organização e encapsulamento de lógica. Podem retornar valores ou apenas executar ações.

---

**Front:**

```js
Qual a diferença entre parâmetros e argumentos em JavaScript?
```

**Back:**

* **Parâmetros**: nomes usados na definição da função.
* **Argumentos**: valores reais passados na chamada da função.

---

**Front:**

```js
O que significa dizer que funções em JavaScript são "first-class citizens"?
```

**Back:**

Significa que funções são tratadas como qualquer outro valor: podem ser atribuídas a variáveis, passadas como argumento ou retornadas por outras funções.

---

**Front:**

```js
O que é uma função callback em JavaScript?
```

**Back:**

É uma função passada como argumento para outra. Ela é chamada dentro da função que a recebeu. É muito usada em eventos, temporizadores e programação assíncrona.

---

**Front:**

```js
Por que este código resulta em erro?

teste2();

const teste2 = function () {
  console.log('Erro!');
};
```

**Back:**

Porque `teste2` é uma expressão de função. Variáveis declaradas com `const` não são inicializadas até a linha da atribuição. Portanto, não podem ser usadas antes disso.

---

**Front:**

```js
Por que este código funciona mesmo chamando a função antes da definição?

teste();

function teste() {
  console.log('OK');
}
```

**Back:**

Funções declaradas com `function` sofrem **hoisting**: são movidas para o topo do escopo e podem ser chamadas antes da definição.

---

**Front:**

```js
O que é escopo em JavaScript?
```

**Back:**

Escopo determina onde uma variável pode ser acessada no código. Variáveis declaradas dentro de funções só existem dentro delas.

---

**Front:**

```js
O que é escopo léxico em JavaScript?
```

**Back:**

Escopo léxico significa que funções "lembram" o local onde foram criadas. Assim, elas podem acessar variáveis do escopo onde foram definidas, mesmo que chamadas em outro lugar.

---

**Front:**

```js
Qual a diferença entre uma função declarada e uma função anônima atribuída a uma variável?
```

**Back:**

* **Função declarada**: usa `function nome()` e sofre hoisting.
* **Função anônima atribuída**: é armazenada em uma variável (`const x = function() {}`) e **não** sofre hoisting.

---
