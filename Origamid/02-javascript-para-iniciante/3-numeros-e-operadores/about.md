# 🔢 Números e Operadores em JavaScript

JavaScript trabalha com **um único tipo de número**: `Number`. Isso inclui inteiros, decimais, notação científica, `NaN` e `Infinity`.

---

## 📚 Índice

1. [✅ Exemplos de Números](#-exemplos-de-números)
2. [📌 Notação Científica (Exponencial)](#-notação-científica-exponencial)
3. [📏 Precisão dos Números](#-precisão-dos-números)
4. [⚠️ Separador Decimal](#-separador-decimal)
5. [▶️ Exibindo Múltiplos Valores](#▶-exibindo-múltiplos-valores)
6. [➕ Operadores Aritméticos em JavaScript](#-operadores-aritméticos-em-javascript)

   * [📌 Exponenciação (`**`)](#-exponenciação-)
   * [📌 Módulo (`%`)](#-módulo-)
   * [✨ Concatenação com `+`](#-concatenação-com-)
7. [🚫 NaN (Not a Number)](#-nan-not-a-number)
8. [⚙️ Precedência e Operadores Unários](#-precedência-e-operadores-unários)

   * [🧮 Precedência de Operadores](#-precedência-de-operadores)
   * [🔼 Incremento / 🔽 Decremento](#-incremento---decremento)
   * [🔁 Conversão com Unários](#-conversão-com-unários)
9. [🧠 Exemplo Prático com Unidades](#-exemplo-prático-com-unidades)
10. [🧠 Flashcards (Anki)](#-flashcards-anki)

---

## ✅ Exemplos de Números

```js
let idade = 29;
let gols = 1000;
let pi = 3.14;
let exp = 2e10; // 20000000000
```

---

## 📌 Notação Científica (Exponencial)

```js
console.log(2e3);   // 2000
console.log(2e-1);  // 0.2
```

---

## 📏 Precisão dos Números

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

> JavaScript usa o padrão IEEE 754 e é preciso até 15 dígitos decimais.

---

## ⚠️ Separador Decimal

```js
let preco = 9.99;       // ✅
let precoErrado = 9,99; // ❌ Vai gerar erro
```

> ✅ Use ponto (.) como separador decimal, **não vírgula**.

---

## ▶️ Exibindo Múltiplos Valores

```js
console.log(idade, gols, pi, exp);
// Saída: 29 1000 3.14 20000000000
```

---

## ➕ Operadores Aritméticos em JavaScript

### ✅ Exemplos Básicos

```js
let soma = 100 + 50;
let subtracao = 100 - 50;
let multiplicacao = 100 * 2;
let divisao = 100 / 2;
let expoente = 2 ** 4;
let modulo = 14 % 5;
```

---

### 📌 Exponenciação (`**`)

```js
2 ** 3;         // 8
Math.pow(2, 3); // 8
```

---

### 📌 Módulo (`%`)

```js
10 % 3  // 1
14 % 5  // 4
8 % 2   // 0
```

#### 🧠 Usos práticos

```js
num % 2 === 0         // número par
index % 2 === 0       // zebra (linhas alternadas)
i % array.length      // rotação em array
```

---

### ✨ Concatenação com `+`

```js
let nome = "Edy";
let idade = 22;
console.log("Nome: " + nome + ", Idade: " + idade);
// Nome: Edy, Idade: 22
```

> ⚠️ `+` também serve para **concatenação de strings**.

---

## 🚫 NaN (Not a Number)

### Exemplo

```js
let peso = 80 + 'kg';         // "80kg" (string)
let pesoDividido = peso / 2;  // NaN
```

### Verificação

```js
isNaN(pesoDividido); // true
isNaN(10);           // false
```

> ⚠️ `NaN` significa que a operação **não resultou em número válido**.

---

## ⚙️ Precedência e Operadores Unários

### 🧮 Precedência de Operadores

```js
20 + 5 * 2         // 30 (multiplicação primeiro)
(20 + 5) * 2       // 50 (parênteses têm prioridade)
```

---

### 🔼 Incremento / 🔽 Decremento

```js
let x = 5;
console.log(x++); // 5 (retorna e depois incrementa)
console.log(++x); // 7 (incrementa antes de retornar)
```

```js
let y = 1;
console.log(--y); // 0
console.log(y--); // 0
```

---

### 🔁 Conversão com Unários

```js
+'10';    // 10 (conversão para número)
-'10';    // -10
+true;    // 1
+'abc';   // NaN
```

---

### ⚙️ Diferença entre `+` e `-` com strings

```js
+'200' + 50;   // 250 (número)
'200' + 50;    // "20050" (concatenação)
'200' - 50;    // 150 (conversão implícita)
```

---

## 🧠 Exemplo Prático com Unidades

```js
let peso = +'80';  // conversão para número
let pesoPorDois = `${peso / 2}kg`;
console.log(pesoPorDois); // "40kg"
```

---

## 🧠 Flashcards (Anki)

💡 Estilo: frente = pergunta ou código | verso = explicação

---

**Front:**

```js
console.log(0.1 + 0.2);
```

**Back:**

Imprime `0.30000000000000004`.
Isso ocorre devido à imprecisão de ponto flutuante do padrão IEEE 754.

---

**Front:**

O que o operador `%` faz em JavaScript?

**Back:**

Retorna o **resto da divisão inteira** entre dois números.
Exemplo: `10 % 3` retorna `1`.

---

**Front:**

Qual é a diferença entre `+` e `-` com uma string?

**Back:**

* `+` pode **concatenar** strings.
* `-` tenta **converter a string em número**.

Exemplo:

```js
'200' + 50 → "20050"
'200' - 50 → 150
```

---

**Front:**

Como converter `'10'` (string) em número usando um operador?

**Back:**

Use o operador unário `+`:

```js
+'10'; // retorna 10 (tipo: number)
```

---

**Front:**

Qual a saída de `+'abc'`?

**Back:**

`NaN`, pois `'abc'` **não é um número válido**.

---

**Front:**

Como verificar se um valor é `NaN`?

**Back:**

Use a função:

```js
isNaN(valor);
```

Exemplo:

```js
isNaN('abc'); // true
```

---
