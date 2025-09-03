Perfeito 👍
Peguei suas anotações e adaptei para o mesmo **padrão estruturado** que você já está usando (com índice, explicações, exemplos, flashcards no final).

Aqui está a versão melhorada em Markdown:

---

# 📘 Seleção de Elementos no DOM

## 📚 Índice

* [🔑 getElementById](#-getelementbyid)
* [📂 getElementsByClassName / getElementsByTagName](#-getelementsbyclassname--getelementsbytagname)
* [🎯 querySelector / querySelectorAll](#-queryselector--queryselectorall)
* [🧠 Flashcards (Anki)](#-flashcards-anki)

---

## 🔑 getElementById

O método **`getElementById`** seleciona e retorna **um único elemento do DOM** a partir do seu **atributo `id`**.

* Retorna **o elemento** se encontrado
* Retorna **`null`** se não encontrar

```js
const animais = document.getElementById('animais'); // Seleciona pelo ID

console.log(animais.innerText); // Retorna o texto do elemento

// Se não encontrar, retorna null
const naoExiste = document.getElementById('animaiss');
console.log(naoExiste); // null
```

---

## 📂 getElementsByClassName / getElementsByTagName

Esses métodos retornam **listas de elementos (HTMLCollection)**, que são **ao vivo** (se o DOM mudar, a lista é atualizada automaticamente).

* `getElementsByClassName('classe')` → seleciona todos os elementos com a classe especificada.
* `getElementsByTagName('tag')` → seleciona todos os elementos de uma tag HTML.

```js
const lista = document.getElementsByClassName('animais'); 
const itens = document.getElementsByTagName('li'); 

console.log(lista); // HTMLCollection ao vivo
console.log(itens); // HTMLCollection ao vivo
```

---

## 🎯 querySelector / querySelectorAll

Esses métodos usam **seletores CSS** para buscar elementos:

* `querySelector('seletor')` → retorna **o primeiro elemento** que corresponde ao seletor.
* `querySelectorAll('seletor')` → retorna **NodeList** com todos os elementos correspondentes (não é ao vivo).

```js
const animais = document.querySelector('.animais'); // Classe
const contato = document.querySelector('#contato'); // ID
const ultimoItem = document.querySelector('.animais-lista li:last-child'); // Último item
const linkCSS = document.querySelector('[href^="https://"]'); // Atributo
const primeiroUl = document.querySelector('ul'); // Primeira <ul>

// Busca dentro de uma <ul> específica
const navItem = primeiroUl.querySelector('li'); 
```

---

## 🧠 Flashcards (Anki)

💡 **Estilo:** frente = pergunta e/ou código com questão explícita | verso = explicação completa e didática.

---

**Front:**

```js
Qual a diferença entre getElementById e getElementsByClassName?
```

**Back:**

* `getElementById` → retorna **um único elemento** (ou `null` se não existir).
* `getElementsByClassName` → retorna uma **lista de elementos (HTMLCollection ao vivo)**.

---

**Front:**

```js
O que acontece se getElementById não encontrar um elemento?
```

**Back:**

Ele retorna **`null`**. Diferente de `getElementsByClassName`, que retorna uma coleção vazia.

---

**Front:**

```js
Qual a diferença entre HTMLCollection e NodeList?
```

**Back:**

* **HTMLCollection** → retornada por `getElementsByClassName` e `getElementsByTagName`. É **ao vivo** (se o DOM mudar, a coleção muda).
* **NodeList** → retornada por `querySelectorAll`. **Não é ao vivo**.

---

**Front:**

```js
Qual a principal diferença entre querySelector e querySelectorAll?
```

**Back:**

* `querySelector` → retorna **apenas o primeiro** elemento encontrado.
* `querySelectorAll` → retorna uma lista (NodeList) com **todos os elementos** correspondentes ao seletor.

---

**Front:**

```js
Por que querySelector é considerado mais flexível que getElementById?
```

**Back:**

Porque aceita **qualquer seletor CSS** (classe, id, atributo, pseudoseletor, etc.), enquanto `getElementById` só busca pelo atributo `id`.

---

Quer que eu faça a mesma melhoria para suas anotações de **`console.table` e querySelector\`** que você me mandou antes?
