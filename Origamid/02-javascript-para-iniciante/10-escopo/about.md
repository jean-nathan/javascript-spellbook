# 🔒 Escopo em JavaScript: var, let e const

> 🎯 **Objetivo**: Dominar os conceitos de escopo em JavaScript e entender as diferenças cruciais entre var, let e const para evitar bugs e escrever código mais seguro.

---

## 📚 Índice

1. [🧱 Fundamentos do Escopo](#fundamentos-do-escopo)
2. [🔧 Escopo de Função](#escopo-de-funcao)
3. [🌐 Variáveis Globais (Problema)](#variaveis-globais-problema)
4. [📦 Escopo de Bloco](#escopo-de-bloco)
5. [🔄 Problemas com For Loops](#problemas-com-for-loops)
6. [🛡️ const: Imutabilidade Relativa](#const-imutabilidade-relativa)
7. [⚡ let: Mutabilidade Controlada](#let-mutabilidade-controlada)
8. [🔧 Casos Práticos](#casos-praticos)
9. [🧠 Flashcards Anki](#flashcards-anki)

---

## 🧱 Fundamentos do Escopo {#fundamentos-do-escopo}

**Escopo** define onde uma variável pode ser acessada no código. Em JavaScript, temos três tipos principais:

- **Escopo Global**: Acessível em todo o código
- **Escopo de Função**: Limitado à função onde foi declarada  
- **Escopo de Bloco**: Limitado ao bloco `{}` onde foi declarada

> 💡 **Dica**: O escopo serve para **evitar conflitos entre nomes** e manter o código organizado.

---

## 🔧 Escopo de Função {#escopo-de-funcao}

Variáveis declaradas **dentro de funções** não são acessíveis fora delas.

### Exemplo Correto (com let/const)

```javascript
function mostrarCarro() {
    let carro = 'Fusca';  // Variável local
    console.log(carro);   // ✅ Funciona
}

mostrarCarro(); // "Fusca"
console.log(carro); // ❌ Uncaught ReferenceError: carro is not defined
```

> 🔹 **Importante**: Esta é a forma **correta** - a variável fica encapsulada na função.

---

## 🌐 Variáveis Globais (Problema) {#variaveis-globais-problema}

### O Erro Perigoso

```javascript
function mostrarCarro() {
    carro = 'Fusca';  // ⚠️ SEM declaração (var/let/const)
    console.log(carro);
}

mostrarCarro(); // "Fusca"
console.log(carro); // "Fusca" (❌ Vazou para escopo global!)
```

### Por que isso acontece?

**Peculiaridade histórica** do JavaScript - criação implícita de variáveis globais:

```javascript
// O que você escreve:
function mostrarCarro() {
    carro = 'Fusca';  // Sem var, let ou const
}

// O que o JavaScript entende:
function mostrarCarro() {
    window.carro = 'Fusca';  // Cria propriedade no objeto global
}
```

### Contexto Histórico

> 📚 **História**: JavaScript foi criado em **10 dias** por Brendan Eich em 1995. A ideia era ser "amigável" para iniciantes: *"se esqueceu de declarar, vamos criar automaticamente"*.

### Como Prevenir

```javascript
// Solução 1: Use strict mode
'use strict';

function mostrarCarro() {
    carro = 'Fusca'; // ❌ Erro: ReferenceError
}

// Solução 2: Sempre declare variáveis
function mostrarCarro() {
    let carro = 'Fusca'; // ✅ Correto
}
```

> ⚠️ **Alerta**: Sempre declare suas variáveis com `let`, `const` ou `var` para evitar poluição do escopo global.

---

## 📦 Escopo de Bloco {#escopo-de-bloco}

Variáveis criadas com `var` **vazam o bloco**. Por isso, com ES6, preferimos `const` e `let`.

### Problema com var

```javascript
if (true) {
    var carro = 'Fusca';  // var não respeita escopo de bloco
    console.log(carro);   // "Fusca"
}

console.log(carro); // "Fusca" (❌ Vazou do bloco!)
```

### Solução com let/const

```javascript
if (true) {
    let carro = 'Fusca';  // let respeita escopo de bloco
    console.log(carro);   // "Fusca"
}

console.log(carro); // ❌ ReferenceError (✅ Comportamento desejado)
```

---

## 🔄 Problemas com For Loops {#problemas-com-for-loops}

### Problema com var

```javascript
for (var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

console.log(i); // 10 (❌ Variável vazou do loop!)
```

### Solução com let

```javascript
for (let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

console.log(i); // ❌ ReferenceError (✅ Variável encapsulada)
```

> 💡 **Regra de Ouro**: **Sempre use `let` em loops** para evitar vazamentos de variáveis.

---

## 🛡️ const: Imutabilidade Relativa {#const-imutabilidade-relativa}

`const` mantém escopo no bloco, **impede redeclaração** e **modificação do valor da variável**.

### Características do const

```javascript
// ✅ Declaração correta
const mes = 'Dezembro';

// ❌ Tentativas inválidas
mes = 'Janeiro';        // Erro: tentou modificar valor
const semana;           // Erro: declarou sem valor inicial
const mes = 'Janeiro';  // Erro: redeclaração
```

### const com Objetos (Pegadinha!)

```javascript
const data = {dia: 28, mes: 'Dezembro', ano: 2018};

// ✅ Permitido: modificar propriedades
data.dia = 29;          // Funciona!
data.novaInfo = true;   // Funciona!

// ❌ Proibido: reatribuir a variável
data = 'Janeiro';       // Erro!
```

> 🔹 **Importante**: `const` protege a **referência**, não o **conteúdo** do objeto.

---

## ⚡ let: Mutabilidade Controlada {#let-mutabilidade-controlada}

`let` mantém escopo no bloco, **impede redeclaração**, mas **permite modificação** do valor.

### Características do let

```javascript
// ✅ Uso correto
let ano;           // Pode declarar sem valor inicial
ano = 2018;        // Pode atribuir valor depois
ano++;             // Pode modificar valor
console.log(ano);  // 2019

// ❌ Tentativa inválida
let ano = 2020;    // Erro: redeclaração na mesma escopo
```

### Comparação Rápida

| Característica | var | let | const |
|---------------|-----|-----|--------|
| Escopo de bloco | ❌ | ✅ | ✅ |
| Redeclaração | ✅ | ❌ | ❌ |
| Modificação | ✅ | ✅ | ❌ |
| Deve inicializar | ❌ | ❌ | ✅ |

---

## 🔧 Casos Práticos {#casos-praticos}

### Problema para Resolver

```javascript
// PROBLEMA: O que fazer para total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total); // Atualmente: 100, Desejado: 500
```

### Soluções

#### Solução 1: Usar let no loop
```javascript
var numero = 50;

for (let numero = 0; numero < 10; numero++) {  // let mantém escopo local
    console.log(numero); // 0, 1, 2... 9
}

const total = 10 * numero;  // numero ainda é 50
console.log(total); // 500 ✅
```

#### Solução 2: Renomear variável do loop
```javascript
var numero = 50;

for (var i = 0; i < 10; i++) {  // Variável diferente
    console.log(i);
}

const total = 10 * numero;  // numero preservado
console.log(total); // 500 ✅
```

#### Solução 3: Usar const/let desde o início
```javascript
const numero = 50;  // const protege contra modificação

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const total = 10 * numero;
console.log(total); // 500 ✅
```

> 💡 **Melhor Prática**: Use `const` para valores que não mudam e `let` para valores que mudam, evite `var`.

### Exemplo Real: Event Listeners

```javascript
// ❌ Problema comum com var
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Imprime: 3, 3, 3
    }, 100);
}

// ✅ Solução com let
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Imprime: 0, 1, 2
    }, 100);
}
```

## Analogia do restaurante:
Com var: É como ter um quadro único onde o garçom anota o pedido. Todos os clientes olham para o mesmo quadro, mas quando vão buscar o pedido, só veem o último que foi anotado.
Com let: É como dar um papel individual para cada cliente. Cada um guarda seu próprio pedido.

---

## 🧠 Flashcards Anki {#flashcards-anki}

### Card 1: Escopo de Função
**Front:**
```javascript
function teste() {
    let x = 10;
}
teste();
console.log(x); // O que acontece?
```

**Back:**
**ReferenceError: x is not defined**
**Explicação:** Variáveis declaradas dentro de funções (escopo de função) não são acessíveis fora delas. Isso evita poluição do escopo global e conflitos de nomes.

---

### Card 2: Diferença var vs let em blocos
**Front:**
```javascript
// Cenário A
if (true) { var a = 1; }
console.log(a);

// Cenário B  
if (true) { let b = 1; }
console.log(b);
```

**Back:**
**Cenário A:** Imprime `1` (var vaza o bloco)
**Cenário B:** ReferenceError (let respeita escopo de bloco)
**Regra:** `var` tem escopo de função, `let`/`const` têm escopo de bloco.

---

### Card 3: const com objetos
**Front:**
```javascript
const obj = {nome: 'João'};
obj.nome = 'Maria';  // Válido?
obj = {nome: 'Ana'}; // Válido?
```

**Back:**
```javascript
obj.nome = 'Maria';  // ✅ VÁLIDO - modifica propriedade
obj = {nome: 'Ana'}; // ❌ ERRO - tenta reatribuir variável
```
**Explicação:** `const` protege a referência, não o conteúdo do objeto.

---

### Card 4: Variável global implícita
**Front:**
```javascript
function criar() {
    variavel = 'teste'; // Sem var/let/const
}
criar();
console.log(variavel); // O que acontece?
```

**Back:**
**Imprime:** `'teste'`
**Explicação:** JavaScript cria automaticamente uma variável global quando você não declara com var/let/const. Isso é um **erro** - sempre declare suas variáveis!
**Solução:** Use `'use strict'` ou sempre declare variáveis.

---

### Card 5: Loop com var vs let
**Front:**
```javascript
// Versão A
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// Versão B
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

**Back:**
**Versão A:** Imprime `3, 3, 3`
**Versão B:** Imprime `0, 1, 2`
**Explicação:** `var` tem uma única instância compartilhada, `let` cria uma nova instância a cada iteração do loop.

---

### Card 6: Quando usar cada declaração
**Front:**
```
Quando usar var, let e const?
Complete a regra de boas práticas:
```

**Back:**
**Ordem de preferência:**
1. **`const`** - Para valores que não mudam (padrão)
2. **`let`** - Para valores que precisam mudar
3. **`var`** - Evitar (legado, apenas se necessário para compatibilidade)

**Regra:** Comece sempre com `const`, mude para `let` apenas se precisar reatribuir.

---

> ✅ **Resumo**: Use `const` por padrão, `let` quando precisar mudar o valor, e evite `var`. Sempre declare suas variáveis para evitar criação implícita de globais. O escopo de bloco (`let`/`const`) é mais seguro que escopo de função (`var`).
