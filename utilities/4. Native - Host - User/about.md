# Native, Host e User

## Native
- Objetos nativos são aqueles definidos na especificacao da linguagem e sao implementados independente do host.

// Construtores de objetos nativos
Object
String
Array
Function

// Host 
- Objetos do host são aqueles implementados pelo proprio ambiente. Por exemplo, no browser possuimos objetos do DOM, como DomList, HTMLCollection eoutros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.

// Objtos do browser
NodeList
HTMLCollection
Element

// User
- Objetos do user, são objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que voce criar ou importar de alguma biblioteca externa.

const pessoa = {nome: 'Andre';}

O ponto é, a forma de usar esses objetos são a mesma, mas saiba que se voce mudar de ambiente, exemplo, usar o Node.js, alguns objetos do Host não serão acesssiveis.

## Diferentes Versoes

Parei no minuto 03:59
