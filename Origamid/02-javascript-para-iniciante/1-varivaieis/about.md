# 📚 Principio DRY, Variaveis e Hoisting em JavaScript

Abaixo estão os conceitos fundamentais sobre **boas práticas** no JavaScript: evitar repetição com o princípio **DRY**, declarar variáveis corretamente e entender o comportamento do **hoisting**.

---

## 📑 Indice

1. [Principio DRY](#principio-dry)
2. [Declarando Variaveis com DRY](#declarando-variaveis-com-dry)
3. [Nomeando Variaveis](#nomeando-variaveis)
4. [Regras de Declaracao de Variaveis](#regras-de-declaracao-de-variaveis)
5. [Hoisting Icamento](#hoisting-icamento)
6. [Flashcards (Anki)](#flashcards-anki)

---

## Principio DRY

**DRY (Don't Repeat Yourself)** significa **não repetir código desnecessariamente**. Isso torna o código mais limpo, reutilizável e fácil de manter.

### ❌ Sem DRY (repetitivo)

```javascript
function saudacaoParaMaria() {
  console.log("Olá, Maria! Bem-vinda ao sistema.");
}

function saudacaoParaJoao() {
  console.log("Olá, João! Bem-vindo ao sistema.");
}

function saudacaoParaAna() {
  console.log("Olá, Ana! Bem-vinda ao sistema.");
}

saudacaoParaMaria();
saudacaoParaJoao();
saudacaoParaAna();
````

### ✅ Com DRY (reutilizável)

```javascript
function saudacao(nome) {
  console.log(`Olá, ${nome}! Bem-vindo(a) ao sistema.`);
}

saudacao("Maria");
saudacao("João");
saudacao("Ana");
```

---

## Declarando Variaveis com DRY

Você pode declarar **múltiplas variáveis** usando apenas uma palavra-chave (`let`, `const` ou `var`), separando por vírgulas:

```javascript
let name = 'Ted', age = 10, status = 'active';
```

### ✅ Forma alternativa para legibilidade:

```javascript
const name = 'Ted',
      age = 10,
      status = 'active';
```

> Use essa técnica **com moderação** e apenas quando as variáveis forem relacionadas.

---

## Nomeando Variaveis

Regras importantes:

* Comece com letra, `_` ou `$`.
* **Case sensitive**: `nome` ≠ `Nome`.
* **Não use palavras reservadas** (ex: `class`, `return`, etc.).
* Use o padrão **camelCase**: `userAge`, `openModal`.

🔗 [Lista de palavras reservadas – W3Schools](https://www.w3schools.com/js/js_reserved.asp)

---

## Regras de Declaracao de Variaveis

* Sempre **declare antes de usar**, ou ocorrerá erro:

```javascript
console.log(a); // ❌ ReferenceError: a is not defined
let a = 'hi';
```

---

## Hoisting Icamento

**Hoisting** é o comportamento do JavaScript de "içar" (mover para o topo) **declarações de variáveis e funções** antes da execução.

### 🧪 Exemplo:

```javascript
console.log(name); // Retorna: undefined
let name = 'Edy';
```

### 🧐 Por baixo dos panos:

```javascript
let name;            // declaração içada
console.log(name);   // undefined
name = 'Edy';
```

---

### ⚠️ Diferenças entre `var`, `let` e `const`

* `var` permite acesso antes da linha de declaração (retorna `undefined`).
* `let` e `const` **não permitem acesso** antes da declaração (ReferenceError):

```javascript
console.log(age); // ❌ ReferenceError
let age = 30;
```

---

## Hoisting (Içamento)

**Funções declaradas** são içadas com seu corpo completo:

```javascript
sayHello(); // ✅ Funciona

function sayHello() {
  console.log("Olá!");
}
```

**Funções atribuídas a variáveis** não são içadas como funções:

```javascript
sayHello(); // ❌ TypeError: sayHello is not a function

let sayHello = function () {
  console.log("Olá!");
};
```

---

## Flashcards (Anki)

💡 Estilo: frente = pergunta ou código | verso = explicação completa

---

**Front:**
O que significa o princípio DRY em JavaScript?

**Back:**
**DRY (Don't Repeat Yourself)** significa evitar repetição desnecessária de código. Favorece funções reutilizáveis, clareza e manutenção do código.

---

**Front:**

```js
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}
```

**Back:**
Essa função aplica o princípio DRY ao permitir uma saudação genérica para qualquer nome, evitando código duplicado.

---

**Front:**
Qual a diferença entre declarar múltiplas variáveis em uma linha vs. várias linhas?

**Back:**

* Em **uma linha**: reduz espaço, mas pode dificultar a leitura.
* Em **várias linhas com mesmo `const`**: melhora a legibilidade mantendo o DRY.

---

**Front:**

```js
console.log(a);
let a = 10;
```

**Back:**
Erro: `ReferenceError`. Com `let`, a variável não pode ser usada antes da declaração, mesmo que seja içada.

---

**Front:**
O que é hoisting em JavaScript?

**Back:**
É o comportamento onde **declarações de variáveis e funções são movidas para o topo do escopo** antes da execução. `let` e `const` são içados, mas **não inicializados**.

---

**Front:**

```js
sayHi();

function sayHi() {
  console.log("Oi!");
}
```

**Back:**
Funciona normalmente. Funções declaradas com `function` são içadas com o corpo completo e podem ser chamadas antes da linha de definição.

---

**Front:**

```js
sayHi();

let sayHi = function () {
  console.log("Oi!");
};
```

**Back:**
Erro: `TypeError`. A variável é içada, mas não é inicializada como função antes da execução.

---
