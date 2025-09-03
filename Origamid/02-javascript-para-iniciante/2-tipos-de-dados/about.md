# 🧩 Tipos de Dados em JavaScript

JavaScript possui **7 tipos de dados primitivos**, que são imutáveis. Apenas **objetos** são do tipo composto e **mutável**.

---

## 📚 Índice

1. [Tipos Primitivos](#-tipos-primitivos)
2. [Tabela dos Tipos](#-lista-dos-tipos-primitivos)
3. [Bug do `typeof null`](#-bug-do-typeof-null)
4. [Exemplo Prático com `typeof`](#-verificando-o-tipo-de-cada-propriedade)
5. [Diferença entre Aspas](#-aspas-duplas-simples-e-template-string)
6. [🧠 Flashcards (Anki)](#-flashcards-anki)

---

## ✅ Tipos Primitivos

```javascript
let name = 'Edy';         // String
let age = 10;             // Number
let isActive = true;      // Boolean
let time;                 // Undefined
let userName = null;      // Null
let symbol = Symbol();    // Symbol
let bigNumber = 123n;     // BigInt
let newObject = {};       // Object (único tipo não primitivo)
```

> 🔍 Os tipos primitivos não são objetos e não têm métodos próprios, mas o JavaScript os **encapsula automaticamente** em objetos temporários quando necessário.

---

## 📌 Lista dos Tipos Primitivos

| Tipo      | Exemplo     | `typeof` retorna     |
| --------- | ----------- | -------------------- |
| String    | `'Edy'`     | `'string'`           |
| Number    | `10`        | `'number'`           |
| Boolean   | `true`      | `'boolean'`          |
| Undefined | `let x;`    | `'undefined'`        |
| Null      | `null`      | `'object'` ⚠️ (bug)  |
| Symbol    | `Symbol()`  | `'symbol'`           |
| BigInt    | `123n`      | `'bigint'` (ES2020+) |
| Object    | `{}` / `[]` | `'object'`           |

---

## ⚠️ Bug do `typeof null`

```javascript
console.log(typeof null); // "object"
```

> Esse é um **bug histórico** no JavaScript. Apesar de `null` ser um tipo primitivo, `typeof null` retorna `"object"` desde a primeira versão da linguagem.

---

## 🧪 Verificando o Tipo de Cada Propriedade

```javascript
let types = {
  newName: 'Edy',
  age: 22,
  isActive: true,
  time: undefined,
  userName: null,
  symbol: Symbol(),
  bigNumber: 123n,
  newObject: {}
};

function showDataTypes(object) {
  for (let key in object) {
    console.log(`${key}:`, typeof object[key]);
  }
}

showDataTypes(types);
```

### 🖨️ Saída esperada:

```plaintext
newName: string
age: number
isActive: boolean
time: undefined
userName: object     // ⚠️ Bug do typeof null
symbol: symbol
bigNumber: bigint
newObject: object
```

---

## 📝 Aspas Duplas, Simples e Template String

```javascript
const exampleTexts = {
  text1: 'JavaScript é "Super" fácil',
  text2: "JavaScript é 'Super' fácil",
  text3: "JavaScript é \"Super\" fácil", // \ serve como escape
  text4: `JavaScript é "Super" fácil`,
  // text5: "JavaScript é "Super" fácil" // ❌ Erro de sintaxe
}
```

---

# 🧠 Flashcards (Anki)

💡 Estilo: frente = pergunta/código | verso = explicação completa

---

**Front:**

```js
Qual a saída de `typeof null`?
```

**Back:**

`'object'` — Esse é um bug histórico do JavaScript. Embora `null` seja um tipo primitivo, `typeof null` retorna `'object'`.

---

**Front:**
Quais são os 7 tipos primitivos do JavaScript?

**Back:**

1. `string`
2. `number`
3. `boolean`
4. `undefined`
5. `null`
6. `symbol`
7. `bigint`

---

**Front:**

```js
let name = "Edy";
typeof name;
```

**Back:**

Retorna `'string'`. `name` é um valor do tipo primitivo `String`.

---

**Front:**
O que o operador `typeof` retorna para objetos, arrays e funções?

**Back:**

* `typeof {}` → `'object'`
* `typeof []` → `'object'`
* `typeof function() {}` → `'function'` (único caso especial)

---

**Front:**
Como identificar se um valor é `null` com segurança?

**Back:**

Use `valor === null`. O operador `typeof` não é confiável para `null`, pois retorna `'object'`.

---

**Front:**
Para que serve o `Symbol()` em JavaScript?

**Back:**

`Symbol()` cria valores únicos e imutáveis, úteis como identificadores exclusivos em objetos (ex: propriedades privadas).

---

**Front:**
O que acontece se misturar aspas simples e duplas incorretamente?

**Back:**

Causa erro de sintaxe. Exemplo: `"texto "inválido""` → ❌.
Use aspas alternadas ou escape com `\`.

---
