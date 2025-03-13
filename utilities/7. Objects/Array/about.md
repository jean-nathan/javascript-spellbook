# Introdução aos Arrays

Arrays são estruturas de dados que armazenam uma coleção de elementos, permitindo o acesso e manipulação desses elementos de forma organizada. Os elementos dentro de um array podem ser de diversos tipos, como:

- Strings
- Números
- Booleanos
- Objetos
- Funções
- Outros arrays (arrays aninhados)

## Construção de Arrays

No JavaScript, um array pode ser criado de diferentes formas. Todos os arrays herdam os métodos e propriedades do protótipo do construtor `Array`.

### Exemplo de criação de arrays:

```javascript
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corolla', 'Mustang', 'Honda');
```

Acessando elementos e modificando valores:

```javascript
carros[1]; // 'Mustang'
carros[2] = 'Ferrari'; // Modifica o valor no índice 2
carros.length; // 3
```

> Os valores dos arrays não são estáticos e podem ser alterados dinamicamente.

---

## Conversão de Estruturas para Arrays

### `Array.from()`
O método `Array.from()` é utilizado para converter objetos do tipo *array-like* em arrays reais.

Exemplo:

```javascript
let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Transforma em Array
```

---

### `Array.isArray()`
O método `Array.isArray()` verifica se o valor passado é um array e retorna um valor booleano (`true` ou `false`).

Exemplo:

```javascript
let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li);
Array.isArray(li); // true
```

---

## Criando Arrays com `Array.of()`, `Array()` e `new Array()`

Essas três formas podem ser utilizadas para criar arrays, mas funcionam de maneiras ligeiramente diferentes.

```javascript
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1, 2, 3, 4]
new Array(5); // [,,,,] - Cria um array vazio com 5 espaços
Array(5); // [,,,,] - Idêntico ao anterior
Array(1, 2, 3, 4); // [1, 2, 3, 4]
```

> A palavra-chave `new` não é obrigatória para utilizar o construtor `Array()`.

---

# Métodos de Arrays

Os métodos de arrays podem ser divididos em dois tipos:
- **Modificadores**: Alteram a array original.
- **Não Modificadores**: Retornam um novo valor ou array sem alterar o original.

## Métodos Modificadores

### `.sort()` - Ordena os elementos

```javascript
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // ['Baixo', 'Guitarra', 'Violão']
```

### `.unshift()` e `.push()` - Adicionam elementos

```javascript
const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // Adiciona no início
carros.push('Ferrari'); // Adiciona no final
```

### `.shift()` e `.pop()` - Removem elementos

```javascript
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.shift(); // Remove o primeiro
carros.pop(); // Remove o último
```

### `.reverse()` - Inverte a ordem dos elementos

```javascript
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse();
```

### `.splice()` - Adiciona ou remove elementos

```javascript
const linguagem = ['php', 'vue', 'java'];
linguagem.splice(1, 2, 'Go'); // Substitui elementos
```

### `.copyWithin()` - Copia parte da array

```javascript
let items = ['A', 'B', 'C', 'D', 'E'];
items.copyWithin(2, 0, 2);
```

### `.fill()` - Preenche a array com um valor especificado

```javascript
['item1', 'item2', 'item3'].fill('alterado');
```

---

## Métodos Não Modificadores

### `.includes()` - Verifica se um valor existe

```javascript
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
linguagens.includes('css'); // true
```

### `.indexOf()` e `.lastIndexOf()` - Retornam o índice de um elemento

```javascript
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5
```

### `.join()` - Junta os elementos da array em uma string

```javascript
linguagens.join(' '); // 'html css js php python js'
```

Exemplo prático:

```javascript
let htmlString = '<h2>Titulo Principal</h2>';
htmlString = htmlString.split('h2').join('h1'); // Substitui <h2> por <h1>
```

### `.slice()` - Retorna parte de um array

```javascript
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']
```

> O `.slice()` pode ser usado para clonar arrays.

---

