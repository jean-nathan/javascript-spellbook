# ⚡ Operadores em JavaScript: Atribuição e Ternário

> 🎯 **Objetivo**: Dominar os operadores de atribuição e o operador ternário para escrever código JavaScript mais eficiente e conciso.

---

## 📚 Índice

1. [🧱 Fundamentos](#fundamentos)
2. [📊 Operadores de Atribuição](#operadores-de-atribuicao)
3. [🔀 Operador Ternário](#operador-ternario)
4. [⚡ Casos Práticos](#casos-praticos)
5. [🧠 Flashcards Anki](#flashcards-anki)

---

## 🧱 Fundamentos {#fundamentos}

Os operadores em JavaScript são símbolos que realizam operações em variáveis e valores. Neste guia, focaremos em dois tipos essenciais:

- **Operadores de Atribuição**: Modificam o valor de uma variável
- **Operador Ternário**: Oferece uma forma concisa de fazer condicionais

> 💡 **Dica**: Estes operadores tornam o código mais limpo e expressivo quando usados adequadamente.

---

## 📊 Operadores de Atribuição {#operadores-de-atribuicao}

### Conceito Base

Os operadores de atribuição funcionam como **formas abreviadas** para operações matemáticas combinadas com atribuição.

### Sintaxe e Exemplos

```javascript
let x = 5;
let y = 10;

// Atribuição com adição
console.log(x += y); // 15 (equivale a: x = x + y)

// Atribuição com subtração  
console.log(x -= y); // 5 (equivale a: x = x - y)

// Atribuição com multiplicação
console.log(x *= y); // 50 (equivale a: x = x * y)

// Atribuição com divisão
console.log(x /= y); // 5 (equivale a: x = x / y)

// Atribuição com módulo
console.log(x %= y); // 5 (equivale a: x = x % y)

// Atribuição com exponenciação
console.log(x **= y); // 9765625 (equivale a: x = x ** y)
```

### Tabela de Operadores

| Operador | Equivalência | Descrição |
|----------|--------------|-----------|
| `+=` | `x = x + y` | Soma e atribui |
| `-=` | `x = x - y` | Subtrai e atribui |
| `*=` | `x = x * y` | Multiplica e atribui |
| `/=` | `x = x / y` | Divide e atribui |
| `%=` | `x = x % y` | Módulo e atribui |
| `**=` | `x = x ** y` | Exponenciação e atribui |

> 🔹 **Importante**: Estes operadores modificam a variável original, não criam uma nova.

---

## 🔀 Operador Ternário {#operador-ternario}

### Conceito Base

O operador ternário é uma forma **concisa** de escrever estruturas condicionais simples. É o único operador em JavaScript que aceita três operandos.

### Sintaxe

```javascript
condição ? valorSeVerdadeiro : valorSeFalso
```

### Exemplos Básicos

```javascript
let newValue = true;
let isTrue = (newValue) ? 'É verdade' : 'É falso';

console.log(isTrue); // "É verdade"
```

### Exemplos Avançados

```javascript
// Combinando múltiplas condições
let newValue = true;
let isTrue = (newValue && 5 > 2) ? 'É verdade' : 'É falso';

console.log(isTrue); // "É verdade"

// Ternário aninhado (use com moderação)
let idade = 18;
let status = idade >= 18 ? 'adulto' : idade >= 13 ? 'adolescente' : 'criança';

// Atribuição condicional de valores
let usuario = { nome: 'João', premium: true };
let desconto = usuario.premium ? 0.2 : 0.1;
```

> ⚠️ **Cuidado**: Evite ternários muito complexos ou aninhados, pois prejudicam a legibilidade.

---

## ⚡ Casos Práticos {#casos-praticos}

### Exemplo 1: Contador com Operadores de Atribuição

```javascript
let pontuacao = 0;
let bonus = 10;

// Incrementando pontuação
pontuacao += bonus;        // 10
pontuacao *= 2;           // 20
pontuacao -= 5;           // 15

console.log(`Pontuação final: ${pontuacao}`);
```

### Exemplo 2: Validação com Ternário

```javascript
function validarIdade(idade) {
    return idade >= 18 ? 'Acesso liberado' : 'Acesso negado';
}

function calcularDesconto(valor, ehPremium) {
    return ehPremium ? valor * 0.8 : valor * 0.95;
}

// Uso prático
console.log(validarIdade(20));           // "Acesso liberado"
console.log(calcularDesconto(100, true)); // 80
```

### Exemplo 3: Combinando Ambos

```javascript
let saldo = 1000;
let saque = 200;
let taxaAdmin = 5;

// Aplicando taxa apenas se saque for maior que 100
saldo -= saque;
saldo -= saque > 100 ? taxaAdmin : 0;

console.log(`Saldo restante: ${saldo}`); // 795
```

> 💡 **Dica Prática**: Use operadores de atribuição para acumuladores e contadores. Use ternário para atribuições condicionais simples.

---

## 🧠 Flashcards Anki {#flashcards-anki}

### Card 1: Operadores de Atribuição
**Front:** 
```
Qual é a diferença entre x = x + 5 e x += 5?
```

**Back:**
Não há diferença funcional. `x += 5` é uma forma abreviada de `x = x + 5`. Ambos somam 5 ao valor atual de x e armazenam o resultado em x. A forma abreviada é mais concisa e expressiva.

---

### Card 2: Operador Ternário Básico
**Front:**
```javascript
// Complete o código:
let idade = 17;
let acesso = _____;
// Resultado esperado: "Menor de idade"
```

**Back:**
```javascript
let acesso = idade >= 18 ? "Maior de idade" : "Menor de idade";
```
**Explicação:** O operador ternário avalia a condição `idade >= 18`. Se verdadeira, retorna o primeiro valor; se falsa, retorna o segundo.

---

### Card 3: Múltiplos Operadores
**Front:**
```javascript
let x = 10;
x += 5;   // x = ?
x *= 2;   // x = ?  
x -= 3;   // x = ?
```

**Back:**
```javascript
x += 5;   // x = 15 (10 + 5)
x *= 2;   // x = 30 (15 * 2)
x -= 3;   // x = 27 (30 - 3)
```
**Explicação:** Cada operação modifica o valor de x sequencialmente.

---

### Card 4: Ternário com Condições Compostas
**Front:**
```javascript
let user = { age: 25, premium: true };
// Como usar ternário para dar desconto de 20% se premium E idade > 18?
```

**Back:**
```javascript
let desconto = (user.premium && user.age > 18) ? 0.2 : 0;
```
**Explicação:** Usamos operador lógico `&&` dentro da condição do ternário. Ambas condições devem ser verdadeiras para aplicar o desconto.

---

### Card 5: Quando NÃO usar ternário
**Front:**
```
Em que situações devemos evitar o operador ternário?
```

**Back:**
- Quando a lógica é complexa (múltiplas condições aninhadas)
- Quando as expressões são muito longas
- Quando prejudica a legibilidade do código
- Para múltiplas instruções (ternário retorna apenas um valor)

**Alternativa:** Use `if/else` tradicional para maior clareza.

---

> ✅ **Resumo**: Operadores de atribuição economizam código e são ideais para acumuladores. O ternário é perfeito para atribuições condicionais simples, mas deve ser usado com moderação para manter a legibilidade.
