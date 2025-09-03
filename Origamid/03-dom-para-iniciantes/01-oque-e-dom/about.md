# 🌐 DOM para Iniciantes: Document Object Model

> 🎯 **Objetivo**: Entender o DOM (Document Object Model) e aprender a manipular elementos HTML usando JavaScript para criar páginas web interativas.

---

## 📚 Índice

1. [🧱 O que é DOM?](#o-que-e-dom)
2. [🏗️ Hierarquia do DOM](#hierarquia-do-dom)
3. [🪟 Window: O Objeto Global](#window-o-objeto-global)
4. [📄 Document: Representando a Página](#document-representando-a-pagina)
5. [🔗 Nodes e Elements](#nodes-e-elements)
6. [🎯 Seletores e Manipulação](#seletores-e-manipulacao)
7. [⚡ Exercícios Práticos](#exercicios-praticos)
8. [🧠 Flashcards Anki](#flashcards-anki)

---

## 🧱 O que é DOM? {#o-que-e-dom}

**DOM (Document Object Model)** é uma interface que representa documentos HTML e XML através de **objetos**. Com ele é possível manipular a estrutura, estilo e conteúdo destes documentos.

### Conceitos Fundamentais

```javascript
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
```

> 🔹 **Importante**: Quando você inspeciona elemento no Chrome, está vendo a **representação oficial do DOM**.

### Por que o DOM existe?

- **Ponte entre HTML e JavaScript**: Permite que código JavaScript interaja com elementos HTML
- **Representação em árvore**: Organiza elementos como uma estrutura hierárquica
- **Interface padronizada**: Funciona consistentemente em diferentes browsers

> 💡 **Analogia**: Se HTML é o esqueleto da página, o DOM é como um "mapa interativo" que JavaScript usa para navegar e modificar esse esqueleto.

---

## 🏗️ Hierarquia do DOM {#hierarquia-do-dom}

O DOM organiza elementos em uma **estrutura de árvore**:

```
Window
  └── Document
      └── html
          ├── head
          │   ├── title
          │   └── meta
          └── body
              ├── h1
              ├── section
              │   ├── h2
              │   └── p
              └── footer
```

### Visualização Prática

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Título Principal</h1>
    <section>
      <h2>Subtítulo</h2>
      <p>Parágrafo de conteúdo</p>
    </section>
  </body>
</html>
```

> 🔹 **Cada elemento HTML** se torna um **objeto JavaScript** que pode ser manipulado.

---

## 🪟 Window: O Objeto Global {#window-o-objeto-global}

`window` é o **objeto global do browser** que contém tudo: Document, Location, History, etc.

### Propriedades Úteis do Window

```javascript
// Informações da janela
window.innerHeight;    // Altura da área visível
window.innerWidth;     // Largura da área visível
window.outerHeight;    // Altura total da janela
window.outerWidth;     // Largura total da janela

// Localização
window.location.href;  // URL completa da página
window.location.host;  // Domínio da página

// Navegador
window.navigator.language;    // Idioma do navegador
window.navigator.userAgent;  // Informações do browser
```

### Métodos do Window

```javascript
// Alertas e confirmações
window.alert('Isso é um alerta!');
window.confirm('Confirma a ação?');  
window.prompt('Digite seu nome:');

// Como window é global, podemos omitir:
alert('Isso é um alerta!');          // Mesmo que window.alert()
confirm('Confirma a ação?');         // Mesmo que window.confirm()
```

> ⚠️ **Cuidado**: `window` é global, por isso não precisamos escrever `window.` na frente dos seus métodos e propriedades.

---

## 📄 Document: Representando a Página {#document-representando-a-pagina}

`document` representa o **documento HTML** carregado na página.

### Propriedades Principais

```javascript
document.body;          // Elemento <body>
document.head;          // Elemento <head>
document.title;         // Título da página
document.URL;           // URL do documento
document.domain;        // Domínio da página
```

### Métodos de Seleção

```javascript
// Seletores básicos
document.getElementById('meuId');           // Por ID
document.getElementsByClassName('classe');  // Por classe (retorna lista)
document.getElementsByTagName('div');       // Por tag (retorna lista)

// Seletores avançados (mais usados)
document.querySelector('h1');               // Primeiro elemento que casa
document.querySelectorAll('.ativo');        // Todos elementos que casam
```

> 💡 **Dica**: `querySelector` e `querySelectorAll` são mais versáteis pois aceitam qualquer seletor CSS.

---

## 🔗 Nodes e Elements {#nodes-e-elements}

Toda tag HTML é representada pelo objeto **Element**, que herda métodos e propriedades de **Node**.

### Hierarquia de Objetos

```
Node (base)
  └── Element (tags HTML)
      └── HTMLElement (elementos específicos)
          ├── HTMLDivElement
          ├── HTMLButtonElement
          └── HTMLInputElement
```

### Propriedades de Elements

```javascript
const titulo = document.querySelector('h1');

// Conteúdo
titulo.innerText;        // Texto puro (sem HTML)
titulo.innerHTML;        // HTML interno
titulo.textContent;      // Texto + espaços em branco

// Classes e atributos
titulo.classList;        // Lista de classes
titulo.className;        // String com classes
titulo.id;              // ID do elemento

// Dimensões
titulo.offsetHeight;     // Altura total do elemento
titulo.offsetWidth;      // Largura total do elemento
titulo.clientHeight;     // Altura da área de conteúdo
titulo.clientWidth;      // Largura da área de conteúdo
```

### Eventos

```javascript
const titulo = document.querySelector('h1');

// Adicionar event listener
titulo.addEventListener('click', function() {
    console.log('Título clicado!');
});

// Ou usando arrow function
titulo.addEventListener('click', () => {
    console.log('Título clicado!');
});
```

---

## 🎯 Seletores e Manipulação {#seletores-e-manipulacao}

### Exemplos Práticos de Seleção

```javascript
// Por ID
const cabecalho = document.getElementById('header');

// Por classe
const botoes = document.getElementsByClassName('btn');
const primeiroBotao = botoes[0];

// Por tag
const paragrafos = document.getElementsByTagName('p');

// Seletores CSS avançados
const primeiroAtivo = document.querySelector('.ativo');
const todosAtivos = document.querySelectorAll('.ativo');
const inputEmail = document.querySelector('input[type="email"]');
```

### Manipulação de Conteúdo

```javascript
const elemento = document.querySelector('#meuElemento');

// Modificar texto
elemento.innerText = 'Novo texto';
elemento.innerHTML = '<strong>Texto em negrito</strong>';

// Modificar classes
elemento.classList.add('nova-classe');
elemento.classList.remove('classe-antiga');
elemento.classList.toggle('ativo');

// Modificar estilos
elemento.style.color = 'red';
elemento.style.backgroundColor = 'yellow';
```

---

## ⚡ Exercícios Práticos {#exercicios-praticos}

### Exercício 1: Informações da Página
```javascript
// Retorne a URL da página atual utilizando window
console.log(window.location.href);
```

### Exercício 2: Seleção por Classe
```javascript
// Selecione o primeiro elemento da página que possua a classe ativo
console.log(document.querySelector('.ativo'));
// ou
console.log(document.querySelectorAll('.ativo')[0]);
```

### Exercício 3: Informações do Navegador
```javascript
// Retorne a linguagem do navegador
console.log(window.navigator.language);
```

### Exercício 4: Dimensões da Janela
```javascript
// Retorne a largura da página
console.log(window.innerWidth);
```

### Exercícios Extras para Prática

```javascript
// 1. Mude o título da página
document.title = 'Nova Página';

// 2. Adicione uma classe a todos os parágrafos
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => p.classList.add('paragrafo-estilizado'));

// 3. Crie um evento de clique para todos os botões
const botoes = document.querySelectorAll('button');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        alert(`Botão "${botao.innerText}" clicado!`);
    });
});

// 4. Conte quantos elementos têm uma classe específica
const elementosAtivos = document.querySelectorAll('.ativo');
console.log(`Existem ${elementosAtivos.length} elementos ativos`);
```

---

## 🧠 Flashcards Anki {#flashcards-anki}

### Card 1: Definição do DOM
**Front:**
```
O que é DOM e para que serve?
```

**Back:**
**DOM (Document Object Model)** é uma interface que representa documentos HTML e XML através de objetos. Permite manipular a estrutura, estilo e conteúdo dos documentos usando JavaScript.
**Analogia:** É como um "mapa interativo" que JavaScript usa para navegar e modificar elementos HTML.

---

### Card 2: Window vs Document
**Front:**
```javascript
// Qual a diferença entre:
window.innerHeight
document.body
```

**Back:**
- **`window`**: Objeto global do browser, representa a janela/aba
- **`document`**: Representa o documento HTML carregado na página
- **`window.innerHeight`**: Altura da área visível do browser
- **`document.body`**: Elemento `<body>` do HTML
**Hierarquia:** `window` contém `document`

---

### Card 3: Seletores DOM
**Front:**
```javascript
// Complete os seletores:
document.____('h1')           // Primeiro h1
document.____('.ativo')       // Primeiro com classe ativo  
document.____('.ativo')       // Todos com classe ativo
```

**Back:**
```javascript
document.querySelector('h1')          // Primeiro h1
document.querySelector('.ativo')      // Primeiro com classe ativo
document.querySelectorAll('.ativo')   // Todos com classe ativo
```
**Dica:** `querySelector` = primeiro, `querySelectorAll` = todos

---

### Card 4: Propriedades de Element
**Front:**
```javascript
const titulo = document.querySelector('h1');
// Qual a diferença entre:
titulo.innerText
titulo.innerHTML
titulo.textContent
```

**Back:**
- **`innerText`**: Texto visível (sem HTML, respeitando CSS)
- **`innerHTML`**: HTML interno completo (com tags)
- **`textContent`**: Todo texto (sem HTML, incluindo texto oculto)
**Exemplo:** 
```html
<h1>Olá <span style="display:none">mundo</span>!</h1>
innerText: "Olá !"
innerHTML: "Olá <span style=\"display:none\">mundo</span>!"
textContent: "Olá mundo!"
```

---

### Card 5: Event Listeners
**Front:**
```javascript
// Como adicionar um evento de clique a um elemento?
const botao = document.querySelector('button');
// Complete:
botao.____('____', ____);
```

**Back:**
```javascript
botao.addEventListener('click', function() {
    console.log('Botão clicado!');
});
// ou
botao.addEventListener('click', () => {
    console.log('Botão clicado!');
});
```
**Método:** `addEventListener(evento, função)`

---

### Card 6: Manipulação de Classes
**Front:**
```javascript
const elemento = document.querySelector('.box');
// Como adicionar, remover e alternar classes?
```

**Back:**
```javascript
elemento.classList.add('nova-classe');      // Adicionar
elemento.classList.remove('classe-antiga'); // Remover  
elemento.classList.toggle('ativo');         // Alternar (liga/desliga)
elemento.classList.contains('teste');       // Verificar se tem
```
**Propriedade:** `classList` com métodos `add`, `remove`, `toggle`, `contains`

---

### Card 7: Informações do Browser
**Front:**
```javascript
// Como obter:
// - URL atual da página
// - Largura da janela  
// - Idioma do navegador
```

**Back:**
```javascript
window.location.href;        // URL atual
window.innerWidth;           // Largura da janela
window.navigator.language;   // Idioma do navegador
```
**Objetos:** `location` (página), `navigator` (browser), propriedades do `window` (janela)
