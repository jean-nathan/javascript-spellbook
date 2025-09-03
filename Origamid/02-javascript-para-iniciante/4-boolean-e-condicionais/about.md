# ✅ Booleanos e Estruturas Condicionais em JavaScript

## 📚 Índice

* [🔁 Boolean (true/false)](#-boolean-truefalse)
* [🧭 Estrutura Condicional: if, else if, else](#-estrutura-condicional-if-else-if-else)
* [📌 Valores Falsy (avaliados como false)](#-valores-falsy-avaliados-como-false)
* [📌 Valores Truthy (avaliados como true)](#-valores-truthy-avaliados-como-true)
* [🚫 Operador de Negação: `!`](#-operador-de-negação-)
* [⚖️ Operadores de Comparação](#️-operadores-de-comparação)
* [🔗 Operador Lógico `&&` (E lógico)](#-operador-lógico--e-lógico)
* [🔗 Operador Lógico `||` (OU lógico)](#-operador-lógico--ou-lógico)
* [✅ Resumo Visual](#-resumo-visual)
* [🧠 Flashcards (Anki)](#-flashcards-anki)

---

## 🔁 Boolean (true/false)

O tipo `Boolean` representa valores lógicos: `true` (verdadeiro) ou `false` (falso).

```js
let possuiGraduacao = true;
let possuiDoutorado = false;
```

---

## 🧭 Estrutura Condicional: if, else if, else

Usamos estruturas condicionais para executar diferentes blocos de código com base em expressões booleanas.

```js
let possuiGraduacao = true;
let possuiDoutorado = true;

if (possuiGraduacao) {
  console.log('Possui graduação'); 
} else if (possuiDoutorado) {
  console.log('Possui doutorado');
} else {
  console.log('Não possui graduação');
}
```

> 💡 Qualquer valor dentro dos parênteses é **convertido para booleano** (truthy ou falsy).

---

## 📌 Valores Falsy (avaliados como false)

Estes valores são considerados `false` ao serem avaliados em contextos booleanos:

```js
false
0
-0
NaN
null
undefined
''  // string vazia
""  // aspas duplas vazias
```

---

## 📌 Valores Truthy (avaliados como true)

Qualquer valor que **não seja falsy** é considerado `truthy`:

```js
true
1
-5
' '
'JavaScript'
{}
[]
```

---

## 🚫 Operador de Negação: `!`

O operador `!` **inverte** o valor booleano de uma expressão:

```js
!true      // false
!false     // true
!''        // true
!'texto'   // false
```

✅ O operador `!!` é útil para **converter qualquer valor em booleano**:

```js
!!'texto'  // true
!!0        // false
```

---

## ⚖️ Operadores de Comparação

Comparam valores e retornam `true` ou `false`.

| Operador | Descrição                        | Exemplo       | Resultado |
| -------- | -------------------------------- | ------------- | --------- |
| `==`     | Igualdade (não estrita)          | `10 == '10'`  | `true`    |
| `===`    | Igualdade estrita (tipo + valor) | `10 === '10'` | `false`   |
| `!=`     | Diferença (não estrita)          | `10 != '10'`  | `false`   |
| `!==`    | Diferença estrita                | `10 !== '10'` | `true`    |

---

## 🔗 Operador Lógico `&&` (E lógico)

Executa da esquerda para a direita:

* Retorna o **primeiro valor falsy**
* Se todos forem truthy, retorna o **último**

```js
true && true         // true
true && false        // false
'Gato' && 'Cão'      // 'Cão'
(5 - 5) && (5 + 5)    // 0
'Gato' && false       // false
```

---

## 🔗 Operador Lógico `||` (OU lógico)

Executa da esquerda para a direita:

* Retorna o **primeiro valor truthy**
* Se todos forem falsy, retorna o **último**

```js
true || false        // true
false || true        // true
'Gato' || 'Cão'      // 'Gato'
(5 - 5) || (5 + 5)    // 10
false || false       // false
```

---

## ✅ Resumo Visual

```js
true && true         // ✅ Retorna o último true
true && false        // ❌ Retorna false
false || true        // ✅ Retorna o primeiro true
false || false       // ❌ Retorna false
!!''                 // ❌ Falsy → false
!!'JavaScript'       // ✅ Truthy → true
```

---

## 🧠 Flashcards (Anki)

💡 Estilo: pergunta na frente, explicação no verso.

---

**Front:**

```js
O que representa o tipo Boolean em JavaScript?
```

**Back:**

O tipo `Boolean` representa dois valores possíveis: `true` (verdadeiro) e `false` (falso). É usado para decisões lógicas e controle de fluxo.

---

**Front:**

```js
Quais são os valores considerados "falsy" em JavaScript?
```

**Back:**

Os valores falsy são:
`false`, `0`, `-0`, `NaN`, `null`, `undefined`, `''` (string vazia).
Todos esses são tratados como `false` em contextos booleanos.

---

**Front:**

```js
Quais valores são considerados "truthy"?
```

**Back:**

Todos os valores **que não são falsy** são considerados truthy. Exemplos:
`true`, `1`, `-1`, `'JavaScript'`, `[]`, `{}`, `' '` (espaço em string).

---

**Front:**

```js
Para que serve o operador de negação `!`?
```

**Back:**

O operador `!` inverte um valor booleano.
Ex: `!true` → `false`, `!''` → `true`.
Usar `!!valor` converte qualquer valor em booleano.

---

**Front:**

```js
Qual a diferença entre `==` e `===`?
```

**Back:**

* `==`: compara valores, **fazendo coerção de tipo**
* `===`: compara valores **sem coerção de tipo** (estrita)

Exemplo:

```js
10 == '10'   // true
10 === '10'  // false
```

---

**Front:**

```js
Como funciona o operador lógico `&&` em JavaScript?
```

**Back:**

O `&&` (E lógico) retorna:

* O **primeiro valor falsy**, se houver
* Ou o **último valor truthy**, se todos forem verdadeiros

---

**Front:**

```js
Como funciona o operador lógico `||` em JavaScript?
```

**Back:**

O `||` (OU lógico) retorna:

* O **primeiro valor truthy**, se existir
* Ou o **último valor falsy**, se todos forem falsos

---

**Front:**

```js
if ('texto') {
  console.log('Entrou no if');
}
```

**Back:**

A string `'texto'` é um valor **truthy**, então o bloco `if` será executado e imprimirá "Entrou no if".

---
