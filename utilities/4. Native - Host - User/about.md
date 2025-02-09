# Objetos: Native, Host e User

## 📌 **Objetos Nativos (Native)**
- Definidos **pela especificação da linguagem** (ECMAScript).
- Implementados de forma independente do ambiente de execução.
- Existem em qualquer ambiente que suporte JavaScript.

**Exemplos de Construtores Nativos:**
```javascript
Object
String
Array
Function
Promise // Adicionado em versões mais recentes (ES6+)
```

---

## 🖥️ **Objetos do Host (Host)**
- Implementados **pelo ambiente de execução** (browser, Node.js, etc.).
- Variam conforme o ambiente. Exemplo:
  - **Browser**: Objetos relacionados ao DOM e BOM.
  - **Node.js**: Módulos como `fs` (sistema de arquivos) e `http`.

**Exemplos no Browser:**
```javascript
NodeList
HTMLCollection
XMLHttpRequest
window // Objeto global no browser
```

**Observação:** Objetos do Host não estão disponíveis em outros ambientes (ex: `document` não existe no Node.js).

---

## 👤 **Objetos do Usuário (User)**
- Criados pelo desenvolvedor ou importados de bibliotecas externas.

**Exemplo:**
```javascript
const pessoa = { 
  nome: 'Andre', // Correção: vírgula no lugar do ;
  idade: 30 
};

// Objeto criado a partir de uma classe
class Animal {}
const cachorro = new Animal();
```

---

## 🔄 **Compatibilidade entre Ambientes e Versões**

### Navegadores e Versões
- **Browsers diferentes** podem ter implementações distintas de objetos do Host (ex: APIs antigas vs modernas).
- **Atualizações de browsers** adicionam novos objetos/métodos (ex: `fetch` foi introduzido posteriormente ao `XMLHttpRequest`).

### ECMAScript e Versões
- **ECMA International**: Organização que padroniza o JavaScript (ECMAScript).
- **Versões Anuais**: A partir de 2015 (ES6), novas funcionalidades são lançadas anualmente:
  - ES2015 (ES6): `let/const`, arrow functions, classes.
  - ES2016: `Array.prototype.includes`.
  - ES2017: `async/await`.

### Engines JavaScript
- Responsáveis por executar o código. Principais engines:
  - **V8**: Chrome, Edge, Node.js.
  - **SpiderMonkey**: Firefox.
  - **JavaScriptCore**: Safari.

---

## 🛠️ **Verificando Disponibilidade**
Use `typeof` para detectar se um objeto/método existe no ambiente:

```javascript
// Verifica se Array.from (ES6) está disponível
console.log(typeof Array.from !== "undefined"); // true em browsers modernos

// Verifica se o ambiente é um browser (ex: Node.js não tem window)
console.log(typeof window !== "undefined"); 
```

---

## 🔌 **Polyfills e Transpilers**
- **Babel**: Transpila código moderno para versões antigas do JavaScript.
- **Polyfills**: Implementam funcionalidades faltantes em browsers antigos. Exemplo:
  ```javascript
  if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
      // Implementação manual do find
    };
  }
  ```

---

## 🌐 **APIs (Application Programming Interface)**
- **Definição**: Conjunto de interfaces para interação entre softwares.
  - **Browser APIs**: DOM API, Fetch API, Geolocation API.
  - **Externo**: APIs de terceiros (ex: Google Maps, Spotify).

### API vs UI
- **UI (User Interface)**: Interação visual (cliques, formulários).
- **API**: Interação programática via código (ex: `fetch('https://api.com/data')`).

---

### 📝 **Resumo de Diferenciação**
| Tipo         | Origem                   | Exemplos                   | Ambiente         |
|--------------|--------------------------|----------------------------|------------------|
| **Native**   | Especificação JavaScript | `Array`, `Object`          | Universal        |
| **Host**     | Ambiente (ex: browser)   | `document`, `localStorage` | Específico       |
| **User**     | Desenvolvedor            | Objetos/custom classes     | Definido pelo dev|

---

**Nota Final:** Ao desenvolver, considere sempre a compatibilidade do ambiente-alvo e utilize ferramentas como Babel ou polyfills quando necessário. 😊
