# Prototype

## Introdução ao Prototype

- A propriedade `prototype` é um objeto que é automaticamente adicionado a uma função quando ela é criada.
- **Importante**: `prototype` só existe em funções, não em instâncias de objetos.

### Exemplo de Função Construtora

```javascript
function People(name, age) {
  this.name = name;
  this.age = age;
}

const boy = new People('Nathan', 27);

console.log(People.prototype); // Retorna um objeto
console.log(boy.prototype);    // Retorna undefined
```

- Quando criamos uma nova instância de `People` (como `boy`), o `prototype` da função `People` é associado à instância, mas a instância em si não tem a propriedade `prototype`.

### Adicionando Métodos ao Prototype

Podemos adicionar métodos ao `prototype` da função construtora, e esses métodos serão compartilhados por todas as instâncias criadas a partir dessa função.

```javascript
People.prototype.andar = () => 'Pessoa andou!';
People.prototype.nadar = () => 'Pessoa nadou!';

console.log(boy); // O método `andar` não está diretamente no objeto `boy`, mas está no `prototype`.

console.log(boy.andar()); // "Pessoa andou!"
console.log(boy.nadar()); // "Pessoa nadou!"
```

- **Ordem de Busca**: Quando tentamos acessar um método ou propriedade, o JavaScript primeiro verifica se ele existe diretamente no objeto. Se não encontrar, ele procura no `prototype` da função construtora.

### Sobrescrevendo Métodos do Prototype

Se um método for definido diretamente no objeto, ele terá prioridade sobre o método do `prototype`.

```javascript
boy.andar = () => 'Menino andou!';
console.log(boy.andar()); // "Menino andou!" (sobrescreveu o método do prototype)
```

## `__proto__`

- `__proto__` é uma propriedade que referencia o `prototype` do construtor que criou o objeto.
- **Atenção**: `__proto__` não é o mesmo que `prototype`. Ele é uma referência ao `prototype` do construtor.

```javascript
console.log(boy.__proto__); // Retorna o `prototype` de `People`
```

### Cadeia de Prototypes (Prototype Chain)

- O `__proto__` de um objeto aponta para o `prototype` do seu construtor.
- Isso forma uma cadeia de prototypes, onde um objeto herda métodos e propriedades de seu construtor e, por sua vez, do `prototype` de `Object`.

```javascript
console.log(boy.__proto__ === People.prototype); // true
console.log(People.prototype.__proto__ === Object.prototype); // true
```

### Métodos Herdados de `Object.prototype`

- Todos os objetos em JavaScript herdam métodos e propriedades de `Object.prototype`, como `toString()`, `isPrototypeOf()`, e `valueOf()`.

```javascript
boy.toString();       // Herdado de Object.prototype
boy.isPrototypeOf();  // Herdado de Object.prototype
boy.valueOf();        // Herdado de Object.prototype
```

## Resumo

- **`prototype`**: Propriedade de funções que permite adicionar métodos e propriedades compartilhados por todas as instâncias criadas a partir dessa função.
- **`__proto__`**: Referência ao `prototype` do construtor que criou o objeto. Faz parte da cadeia de prototypes.
- **Cadeia de Prototypes**: Quando um método ou propriedade não é encontrado no objeto, o JavaScript busca no `prototype` do construtor e, se necessário, no `prototype` de `Object`.

```javascript
// Exemplo de cadeia de prototypes
boy.__proto__ === People.prototype; // true
People.prototype.__proto__ === Object.prototype; // true
```

- **Herança**: Objetos herdam métodos e propriedades de seus prototypes, permitindo reutilização de código e organização eficiente.

---

Aqui está a organização das novas anotações em formato Markdown, com explicações detalhadas:

```markdown
# Construtores Nativos em JavaScript

## Introdução
Todos os tipos de dados em JavaScript (Objetos, Funções, Números, Strings, etc.) são criados usando **construtores nativos**. Esses construtores possuem um `prototype` com métodos e propriedades que podem ser acessados por suas instâncias.

### Exemplo de Construtores Nativos
```javascript
console.log(String.prototype); // Lista todos os métodos disponíveis para strings
```
- Isso mostra todos os métodos que podem ser usados com strings (ex: `toUpperCase()`, `slice()`, etc).

---

## Acessando Funções do Protótipo
É comum usar métodos diretamente do `prototype` de construtores, especialmente em códigos mais antigos.

### Exemplo Prático: Convertendo NodeList para Array
**HTML:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**JavaScript:**
```javascript
const list = document.querySelectorAll('li'); // Retorna NodeList

// Método antigo (usando prototype do Array)
const listArray = Array.prototype.slice.call(list); // Converte NodeList para Array

// Método moderno (ES6+)
console.log(Array.from(list)); // Faz a mesma conversão
```

**Diferenças:**
- `Array.prototype.slice.call(list)` usa o método `slice` do protótipo de `Array` para converter objetos iteráveis.
- `Array.from()` é um método estático adicionado no ES6 para simplificar a conversão.

---

## Métodos do Objeto vs Protótipo
### Métodos Estáticos vs Métodos de Instância
1. **Métodos do Objeto (Estáticos):**  
   Pertencem diretamente ao construtor (ex: `Array.from()`).
   
2. **Métodos do Protótipo (de Instância):**  
   Pertencem ao `prototype` do construtor (ex: `Array.prototype.slice()`).

### Como Listar Métodos
```javascript
// Lista métodos estáticos do Array
console.log(Object.getOwnPropertyNames(Array)); // Ex: ['from', 'isArray', ...]

// Lista métodos do protótipo do Array
console.log(Object.li.hidden.constructor.name(Array.prototype)); // Ex: ['push', 'slice', ...]
```

### Identificando o Construtor
```javascript
console.log([].constructor.name); // Retorna: 'Array'
console.log('texto'.constructor.name); // Retorna: 'String'
console.log(Array.constructor.name); // Retorna: 'Function' (pois Array é uma função construtora)
```

---
## Entendendo o Retorno de Métodos

### Cadeia de Tipos
O método/propriedade acessado com `.` depende do **tipo do valor retornado** antes do ponto:

```javascript
const car = {
  brand: 'Ford',
  price: 2000,
  andar: () => true
};

// Exemplos:
car.brand.toLocaleUpperCase(); // Método de String ('FORD')
car.price.toLocaleString();    // Método de Number ('2,000')
car.andar().toString();        // Método de Boolean ('true')
car.andar.toString();          // Método de Function ('() => true')
```

### Como Descobrir o Tipo
```javascript
// Verifica o construtor do valor retornado
console.log(car.andar().constructor.name); // Retorna: 'Boolean'

// Cadeia "infinita" (demonstração da hierarquia)
console.log(
  car.andar().constructor.name // 'Boolean'
    .constructor.name          // 'String' (pois 'Boolean' é uma string)
    .constructor.name          // 'String' (novamente)
);
```

**Explicação:**
- `car.andar()` retorna `true` (tipo `Boolean`).
- `Boolean.constructor.name` retorna `'Function'` (pois `Boolean` é uma função construtora).
- Se continuar acessando `constructor.name`, você navega na cadeia de protótipos até chegar a `String`.

---

## Regras Importantes
1. **Valores sem Protótipo:**  
   Apenas `null` e `undefined` não possuem construtores/protótipos.
   
2. **Boas Práticas:**  
   Prefira métodos modernos como `Array.from()` em vez de `Array.prototype.slice.call()`.

3. **Hierarquia dos Tipos:**  
   Todo valor (exceto `null`/`undefined`) tem um `constructor` que aponta para sua função construtora.

--- 

## Diferença entre Métodos Estáticos e de Instância

## 1. Métodos **estáticos** (como `Array.from`):
- **O que são?** São métodos que pertencem à **classe** `Array`, não aos objetos individuais (instâncias) de arrays.
- **Como usá-los?** Você chama diretamente na **classe `Array`**, não em um array específico.

**Exemplo:**

```javascript
Array.from([1, 2, 3]);  // Método estático chamado na classe Array
```

- **Por que é assim?** O método estático é como uma ferramenta que você usa sem precisar de um objeto específico. Ele pertence à classe como um todo.

## 2. Métodos **de instância** (como `map`, `find`, `forEach`):
- **O que são?** São métodos que pertencem a **instâncias** de arrays (ou seja, a arrays específicos).
- **Como usá-los?** Você chama esses métodos em **arrays individuais**.

**Exemplo:**

```javascript
const arr = [1, 2, 3];
arr.map(x => x * 2);  // Método de instância chamado em um array específico
```

- **Por que é assim?** O método de instância é como uma ferramenta que só pode ser usada depois que você criar um objeto (ou array). Ela age diretamente sobre os dados do array.

## Resumo Rápido:
- **Métodos estáticos** (como `Array.from`) pertencem à **classe `Array`** e podem ser chamados sem criar um array. Eles são usados para **criar** ou **trabalhar com dados de forma geral**.
- **Métodos de instância** (como `map`, `find`, `forEach`) pertencem a **arrays específicos** e são usados para **trabalhar com os dados** de um array já existente.

### Exemplos de uso:

```javascript
// Métodos estáticos - chamados diretamente na classe `Array`
console.log(Array.from);   // Função estática para criar um novo array
console.log(Array.isArray); // Função estática para verificar se é um array

// Métodos de instância - chamados em arrays específicos
const arr = [1, 2, 3];
console.log(arr.map);  // Método de instância para manipular o array
console.log(arr.find); // Método de instância para encontrar um elemento no array
```

## Conclusão:
- **`Array.from`** é um método **estático**. Ele pertence à **classe `Array`** e é chamado sem precisar de um array.
- **`map`, `find`, e outros** são métodos de **instância**. Eles pertencem aos **arrays individuais** e são chamados em arrays já existentes.
```

### Em resumo:

- **Métodos estáticos**: Usados sem precisar de um array. Pertencem à **classe** `Array`.
- **Métodos de instância**: Usados em arrays específicos. Estão no **prototype** do `Array`.

---

## Observaçcões sobre o exercicio 4 que usamos chaves pra acessar o metodo herdado no li.

### Por que o `li` está sendo acessado com chaves (`li[method]`)?

No JavaScript, quando você quer acessar uma **propriedade ou método dinâmico** de um objeto (ou seja, cujo nome é armazenado em uma variável), você usa a **notação de colchetes (`[]`)**, e não a notação de ponto (`.`).

### Notação de ponto vs. Notação de colchetes:

1. **Notação de ponto (`.`)**: Usada para acessar propriedades e métodos **conhecidos** ou **fixos** do objeto.

   Exemplo:
   ```javascript
   const obj = { name: "Jean" };
   console.log(obj.name);  // Acessando diretamente a propriedade 'name' do objeto
   ```

2. **Notação de colchetes (`[]`)**: Usada para acessar propriedades ou métodos cujos **nomes são dinâmicos** ou armazenados em variáveis.

   Exemplo:
   ```javascript
   const obj = { name: "Jean" };
   const propertyName = "name";
   console.log(obj[propertyName]);  // Usando uma variável para acessar a propriedade 'name'
   ```

### No seu código:

```javascript
methods.forEach(method => {
  const methodName = method;  // 'method' é o nome do método
  const methodConstructor = li[method].constructor.name;  // Acessando o método usando colchetes
  console.log(methodConstructor);
});
```

**Por que usar `li[method]` e não `li.method`?**

- **`method` é uma variável** que contém o nome do método (ou propriedade), como `'innerText'`, `'click'`, `'hidden'`, etc.
- Você **não sabe de antemão** qual será o nome do método, então você usa **`li[method]`**, que acessa o valor da propriedade **dinamicamente**.
  - Se você usasse `li.method`, o JavaScript procuraria uma propriedade chamada **literalmente `method`** no objeto `li`, o que não seria correto.
  
### Exemplo para ilustrar:

Vamos supor que você tem um array de métodos e quer iterar sobre ele para acessar esses métodos/propriedades dinamicamente:

```javascript
const methods = ['innerText', 'click', 'hidden'];  // Nomes de métodos
const li = document.querySelector('li');  // Um elemento 'li'

methods.forEach(method => {
  const methodName = method;  // O nome do método é armazenado em 'method'
  
  // Aqui, li[method] vai acessar cada método ou propriedade do li dinamicamente
  const methodConstructor = li[method] ? li[method].constructor.name : 'undefined';
  
  console.log(`${methodName}: ${methodConstructor}`);
});
```

No caso acima:
- **`li[method]`** vai acessar o valor da propriedade `method` no objeto `li`.
- Se `method` for `'innerText'`, **`li[method]` será equivalente a `li.innerText`**.
- Se `method` for `'click'`, **`li[method]` será equivalente a `li.click`**.

A notação de colchetes **permite que você acesse dinamicamente qualquer propriedade ou método** do objeto com base na variável `method`.

### Exemplo de Saída:

Se `li` for um elemento HTML e contiver propriedades como `innerText` e `hidden`, a saída pode ser algo assim:

```
innerText: String
click: Function
hidden: undefined
```

- **`innerText`** e **`click`** têm tipos associados, enquanto **`hidden`** pode ser `undefined` se não existir no elemento `li`.

### Conclusão:

Usamos **`li[method]`** porque `method` é uma variável que contém o nome da propriedade ou método que queremos acessar no objeto `li`. Usar colchetes é a forma correta de acessar propriedades dinâmicas, ao invés de usar a notação de ponto, que só funciona com propriedades/métodos conhecidos de antemão.
