# Trabalhando com Números em JavaScript

Entenda como manipular números, utilizar métodos do objeto `Number` e funções matemáticas nativas do JavaScript.

## O Objeto `Number`

Em JavaScript, todo número é um valor primitivo, mas possui acesso a métodos e propriedades através do **prototype** de `Number`. Além disso, o objeto `Number` contém métodos estáticos úteis.

**Exemplos:**
```javascript
const ano = 2018;          // Número primitivo
const preco = new Number(99); // Objeto Number (raro de ser usado)
```

---

## Verificando Valores Especiais e Tipos

### `Number.isNaN(value)`
Verifica se o valor é `NaN` ("Not a Number"). 
- **Diferente da função global `isNaN()`**, que converte o valor para número antes de verificar.
```javascript
Number.isNaN(NaN);        // true
Number.isNaN('Texto');    // false (não é NaN, é string)
Number.isNaN(4 + 5);      // false
```

### `Number.isInteger(value)`
Verifica se o valor é um **número inteiro**.
```javascript
Number.isInteger(20);     // true
Number.isInteger(23.6);   // false
Number.isInteger('20');   // false (é uma string)
```

---

## Convertendo Strings para Números

### `Number.parseFloat(string)`
Converte uma string em um número **com casas decimais** (ponto flutuante). 
- Ignora caracteres não numéricos no final.
- Retorna `NaN` se a string não começar com número.
```javascript
parseFloat('99.50');          // 99.5 (funciona sem o Number)
Number.parseFloat('R$ 100');  // NaN (começa com caractere não numérico)
```

### `Number.parseInt(string, radix)`
Converte uma string em um número **inteiro**, usando uma base numérica (`radix`).
- `radix`: Base do sistema numérico (ex: 10 para decimal, 16 para hexadecimal).
```javascript
parseInt('99.50', 10);     // 99 (remove decimais)
Number.parseInt('100 Reais', 10); // 100 (ignora " Reais")
parseInt('FF', 16);        // 255 (hexadecimal)
```

⚠️ **Importante:** Sempre especifique o `radix` para evitar comportamentos inesperados (ex: `parseInt('010')` pode ser interpretado como octal).

---

## Formatando Números

### `n.toFixed(decimais)`
Arredonda o número para uma quantidade fixa de casas decimais, retornando uma **string**.
```javascript
const preco = 2.99;
preco.toFixed();    // '3' (0 casas decimais)
preco.toFixed(2);   // '2.99'

const carro = 1000.455;
carro.toFixed(2);   // '1000.46' (arredondamento automático)
```

### `n.toLocaleString(lang, options)`
Formata o número conforme localidade e opções (moeda, separadores, etc).
```javascript
const preco = 59.49;

// Formatação monetária
preco.toLocaleString('en-US', { 
  style: 'currency', 
  currency: 'USD' 
}); // '$59.49'

preco.toLocaleString('pt-BR', { 
  style: 'currency', 
  currency: 'BRL' 
}); // 'R$ 59,49'

// Formatação com separadores de milhar
(1000.99).toLocaleString('pt-BR'); // '1.000,99'
```

---

## O Objeto `Math`

Fornece métodos e constantes matemáticas. Não precisa ser instanciado.

### Constantes Úteis
```javascript
Math.PI;    // 3.141592653589793
Math.E;     // 2.718281828459045 (base do logaritmo natural)
Math.LN10;  // 2.302585092994046 (logaritmo natural de 10)
```

### Métodos Comuns

#### Arredondamento
| Método    | Descrição                          | Exemplo                   |
|-----------|------------------------------------|---------------------------|
| `ceil()`  | Arredonda para cima                | `Math.ceil(4.3)` → 5      |
| `floor()` | Arredonda para baixo               | `Math.floor(4.8)` → 4     |
| `round()` | Arredonda para o inteiro mais próximo | `Math.round(4.5)` → 5     |

#### Outros Métodos
```javascript
Math.abs(-5.5);         // 5.5 (valor absoluto)
Math.max(5, 3, 10);     // 10 (maior valor)
Math.min(5, 3, 10);     // 3 (menor valor)
Math.random();          // Número aleatório entre 0 (inclusive) e 1 (exclusive)
```

### Gerando Números Aleatórios em um Intervalo
```javascript
// Entre 0 e 100
Math.floor(Math.random() * 100);

// Entre 32 e 72 (fórmula geral)
const min = 32;
const max = 72;
Math.floor(Math.random() * (max - min + 1)) + min;
```

---

## Dicas Práticas

1. **Prefira números primitivos** em vez de `new Number()`.
2. **Cuidado com arredondamentos**: `toFixed()` retorna uma string e pode não ser preciso para cálculos.
3. **Sempre use `radix`** em `parseInt` para evitar ambiguidades.
4. **Use `toLocaleString`** para formatar valores para o usuário final.

```javascript
// Exemplo completo: Preço formatado
const valor = 1499.49;
console.log(
  valor.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  })
); // R$ 1.499,49
```
