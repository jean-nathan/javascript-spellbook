# Funções Construtoras em JavaScript

## Conceitos Básicos

- **Funções Construtoras**: Responsáveis por criar novos objetos quando invocadas com `new`
- **Nomenclatura**: Seguem PascalCase (ex: `MinhaFuncaoConstrutora`)

```javascript
function Carro() {
  this.marca = 'Marca',
  this.preco = 0
}

const honda = new Carro();
const bmw = new Carro();

console.log(honda); // { marca: 'Marca', preco: 0 }
console.log(bmw); // { marca: 'Marca', preco: 0 }
```

---

## Operador `new` - Funcionamento Interno

### Passo a Passo:
1. Cria objeto vazio: `const novoObjeto = {}`
2. Define protótipo: `Object.setPrototypeOf(novoObjeto, Carro.prototype)`
3. Vincula `this` ao novo objeto
4. Executa a função construtora
5. Retorna o objeto automaticamente

```javascript
function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();

// Verificações:
console.log(Object.getPrototypeOf(honda) === Carro.prototype); // true
console.log(honda instanceof Carro); // true
```

---

## Construtores com Parâmetros

```javascript
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 79000);
console.log(honda); // { marca: 'Honda', preco: 79000 }
```

---

## Variáveis no Construtor vs Herança Prototipal

### Características:
- Variáveis declaradas com `const`/`let` são locais
- Não são exportadas para as instâncias
- Funcionam como valores privados durante a construção

```javascript
function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);
console.log(mazda); // Carro2 { marca: 'Mazda', preco: 6000 }
```

---

# Manipulação DOM com Funções Construtoras

## Funcionalidades Principais

1. **Caching de Elemento**  
   Armazena elemento no instanciamento (`this.element`)

2. **Validação de Elemento**  
   Lança erro se seletor não existir

3. **Controle de Classes com Encadeamento**  
   - `activate()`: Adiciona classe `active`
   - `deactivate()`: Remove classe `active`

## Casos de Uso
- Controle de estados visuais (abas, menus)
- Performance em operações sequenciais
- Substituição leve de bibliotecas

```javascript
function Dom(selector) {
  this.element = document.querySelector(selector);
  
  if (!this.element) {
    throw new Error(`Seletor "${selector}" não encontrado`);
  }

  this.activate = function() {
    this.element.classList.add('active');
    return this;
  };

  this.deactivate = function() {
    this.element.classList.remove('active');
    return this;
  };
}

// Uso:
const botao = new Dom('#meuBotao');
botao.activate().deactivate();
```

---

# Exercícios Práticos

## Exercício 1: Criação de Objetos
```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    return `${this.nome} andou...`;
  }
}

const usuario = new Pessoa('Romário', 26);
console.log(usuario.andar());
```

## Exercício 2: Encadeamento DOM
```javascript
function AplicadorClasses(seletor) {
  this.elementos = document.querySelectorAll(seletor);

  this.adicionarClasse = function() {
    this.elementos.forEach(el => el.classList.add('active'));
    return this;
  };

  this.removerClasse = function() {
    this.elementos.forEach(el => el.classList.remove('active'));
    return this;
  };
}

const elementosLista = new AplicadorClasses('ul');
elementosLista.adicionarClasse().removerClasse();
```

**Conceitos Praticados:**
- Instanciação de objetos
- Métodos encadeáveis
- Manipulação de DOM
- Controle de estado com classes CSS
