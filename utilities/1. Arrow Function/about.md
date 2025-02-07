# Entendendo `this` no JavaScript: Explicações Simplificadas

### 1. **O Problema com Arrow Functions**

Em JavaScript, o **`this`** pode se comportar de maneira diferente dependendo de como você define a função. Um caso importante é o uso de **arrow functions**.

#### O que acontece com o `this` em uma **arrow function**?

- **Arrow functions não têm seu próprio `this`.**
- Elas **herdam o `this`** do contexto onde foram criadas.
- Isso significa que, quando você usa uma **arrow function**, o **`this`** não se refere ao objeto no qual a função foi chamada (a instância do objeto), mas sim ao contexto global (ou ao contexto de onde a função foi criada).

Exemplo com uma **arrow function** no protótipo de um objeto:

```javascript
function People(fisrtname, lastname, age) {
  this.fisrtname = fisrtname;
  this.lastname = lastname;
  this.age = age;
}

// Arrow function no protótipo
People.prototype.showFullName = () => {
  console.log(this);  // 'this' não se refere à instância do objeto
  return this.fisrtname.concat(" ", this.lastname);
};

const newPeople = new People('Jean', 'Nathan', 27);

console.log(newPeople.showFullName());  // 'undefined' ou erro, porque o 'this' não se refere à instância de People
```

**Por que isso não funciona?**
- A arrow function **herda o `this`** do contexto onde foi criada. No seu caso, **o `this`** vai ser o **objeto global**, não a instância de `People`.

### 2. **Usando Funções Tradicionais**

Quando você usa uma **função tradicional** no protótipo de um objeto, o **`this`** se refere corretamente à instância do objeto.

Exemplo com **função tradicional**:

```javascript
function People(fisrtname, lastname, age) {
  this.fisrtname = fisrtname;
  this.lastname = lastname;
  this.age = age;
}

// Função tradicional no protótipo
People.prototype.showFullName = function() {
  return this.fisrtname.concat(" ", this.lastname);  // 'this' aponta para a instância do objeto
};

const newPeople = new People('Jean', 'Nathan', 27);

console.log(newPeople.showFullName());  // "Jean Nathan" (funciona corretamente)
```

**Por que a função tradicional funciona?**
- Em uma **função tradicional**, o **`this`** sempre se refere ao **objeto que chama a função**, ou seja, à instância de `People`.

### 3. **Resumo sobre o Comportamento de `this`**

- **Arrow Functions**:
  - Não têm seu próprio **`this`**.
  - Herdam o **`this`** do contexto em que foram criadas.
  - Isso pode causar problemas quando você espera que o **`this`** se refira à instância do objeto.

- **Funções Tradicionais**:
  - Têm **seu próprio `this`**.
  - O **`this`** se refere à **instância do objeto** (ou seja, ao objeto que chamou a função).
  - **Ideal para usar em métodos de objetos**.

### 4. **Quando Usar Qual Tipo de Função?**

- Use **arrow functions** quando quiser **herdar o `this`** do contexto ao redor (exemplo: callbacks ou funções dentro de outros objetos).
- Use **funções tradicionais** quando quiser que o **`this`** se refira ao **objeto que chamou o método** (exemplo: métodos de objetos).


