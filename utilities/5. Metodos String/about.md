# 📜 Objetos String em JavaScript

### Conceitos Básicos
- **Construtora `String`**: Toda string herda propriedades e métodos do prototype de String.
- **Primitivo vs Objeto**:
  ```javascript
  const comida = "Pizza"; // Tipo primitivo
  const liquido = new String("Água"); // Objeto String
  const ano = new String(2018); // Cuidado: não é um número!
  ```

---

## 🔍 Propriedades Principais
### `str.length`
Retorna o número de caracteres (incluindo espaços):
```javascript
"JavaScript".length; // 10
" Café".length; // 5 (espaço conta)
```

---

## 🎯 Métodos de Acesso a Caracteres
### `str.charAt(posição)` ou `[posição]`
```javascript
const linguagem = "JavaScript";
linguagem.charAt(0); // "J"
linguagem[4]; // "S" (equivalente moderno)
```

### `str.concat(...strings)`
Concatena strings (prefira template literals):
```javascript
"A melhor linguagem é ".concat("JavaScript", "!!"); 
// Equivalente a: `A melhor linguagem é ${"JavaScript"}!!`
```

---

## 🔎 Métodos de Busca
### `str.includes(search, [position])`
Busca **case-sensitive**:
```javascript
const listaFrutas = "Melancia, Banana, Laranja";
listaFrutas.includes("Banana"); // true (posição 10)
listaFrutas.includes("banana"); // false
listaFrutas.includes("Melancia", 5); // false (busca a partir do índice 5)
```

### `str.startsWith()` e `str.endsWith()`
```javascript
const fruta = "Banana";
fruta.startsWith("Ba"); // true
fruta.endsWith("nana"); // true
```

---

## ✂️ Métodos de Corte
### `str.slice(start, [end])`
Suporta índices negativos (conta do final):
```javascript
const texto = "Depósito de cliente";
texto.slice(0, 3); // "Dep"
texto.slice(-7); // "cliente" 
texto.slice(4, 7); // "sít"
```

### `str.substring(start, [end])`
**Cuidado**: Não aceita índices negativos!
```javascript
"JavaScript".substring(4, 7); // "Scr"
```

---

## 🔄 Métodos de Modificação
### `str.replace(padrão, substituição)`
Substitui a primeira ocorrência (use regex para global):
```javascript
let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // "R$ 1200.43"

let html = "<div>Conteúdo</div><div>Item</div>";
html = html.replace(/div/g, "section"); // Substitui todas as ocorrências
```

### `str.padStart(tamanho, preenchimento)` e `padEnd()`
```javascript
"99".padStart(6, "0"); // "000099"
"R$ 23.5".padEnd(10, "."); // "R$ 23.5...."
```

### `str.trim()`, `trimStart()`, `trimEnd()`
Remove espaços em branco:
```javascript
"   Olá Mundo!   ".trim(); // "Olá Mundo!"
"   teste".trimStart(); // "teste"
```

---

## ➗ Métodos de Divisão e Junção
### `str.split(separador)`
Transforma em array:
```javascript
const lista = "Camisas,Bones,Calças";
lista.split(","); // ["Camisas", "Bones", "Calças"]
"JavaScript".split(""); // ["J","a","v","a","S","c","r","i","p","t"]
```

### `array.join(separador)` *(Método de Array)*
```javascript
["A", "B", "C"].join("-"); // "A-B-C"
```

---

## 🔁 Outros Métodos Úteis
### `str.repeat(vezes)`
```javascript
"Ta".repeat(3); // "TaTaTa"
```

### `str.indexOf()` e `lastIndexOf()`
```javascript
const instrumento = "Guitarra";
instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
```

---

## 💡 Dicas Importantes
1. **Imutabilidade**: Métodos de string **nunca alteram** a original, retornam nova string.
2. **Case Sensitivity**: Quase todos os métodos são sensíveis a maiúsculas/minúsculas.
3. **Compatibilidade**: Métodos como `padStart` e `endsWith` são ES6+ (verifique suporte).
4. **Regex**: Para substituições complexas, aprenda [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions).

```javascript
// Exemplo prático combinando métodos
const CPF = " 123.456.789-00 ";
CPF.trim().replace(/\D/g, ""); // "12345678900" (remove não-dígitos)
```

---

**Cheat Sheet Rápido**:
| Método          | Uso                              |
|-----------------|----------------------------------|
| `slice()`       | Corta com índices negativos      |
| `includes()`    | Verifica existência              |
| `replace()`     | Substitui valores                |
| `split()`       | Converte para array              |
| `padStart()`    | Preenche no início               |
| `trim()`        | Remove espaços extras            |
