//1. Mostre a soma das Taxas e Recebimentos

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Recebimento do Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Compra de Café",
    valor: "R$ 15",
  },
  {
    descricao: "Venda de Produto",
    valor: "R$ 120",
  },
  {
    descricao: "Taxa de Entrega",
    valor: "R$ 20",
  },
  {
    descricao: "Pagamento de Serviço",
    valor: "R$ 200",
  },
];

// O código percorre a lista de transacoes e verifica se a descrição de cada transação contém pelo menos uma das palavras "Taxa" ou "Recebimento". Se a descrição contiver qualquer uma dessas palavras, a transação é mantida na lista exist.

// .filter(): Filtra as transações.
// .some(): Verifica se pelo menos uma palavra ("Taxa" ou "Recebimento") está na descrição.
// .includes(): Checa se a palavra está na descrição.
// Resultado: exist vai conter as transações que possuem "Taxa" ou "Recebimento" na descrição.

const exist = transacoes.filter((item) =>
  ["Taxa", "Recebimento"].some((palavra) => item.descricao.includes(palavra))
);

let somaTaxa = 0;
let somaRecebimento = 0;
exist.forEach((item) => {

  if(item.descricao.includes('Taxa')) {
    somaTaxa += Number(item.valor.replace("R$ ", ""));
  } else {
    somaRecebimento += Number(item.valor.replace("R$ ", ""));
  }
  console.log()
});

console.log(somaTaxa);
console.log(somaRecebimento);


// 2. Retorne uma array com a lista abaixo
const transportes = "Carro;Aviao;Trem;Onibus;Bicicleta";

const listaDeTransportes = transportes.split(";");
console.log(listaDeTransportes);

//3. Substitua todos os spans por a's

const menuHTML = `
  <ul>
    <li><span>Home</span></li>
    <li><span>Sobre</span></li>
    <li><span>Serviços</span></li>
    <li><span>Contato</span></li>
  </ul>
`;

const listaDeLinks = menuHTML.replace(/span/g, "a");
console.log(listaDeLinks);

const listaDeLinks2 = menuHTML.split("span").join("a");
console.log(listaDeLinks2);

//4. Retorne o ultimo caracter da frase
const frase = "Melhor do ano";
console.log(frase.charAt(frase.length - 1)); // o
console.log(frase.slice(-1)); // o

//5. Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "    TAXA DO PAO",
  "taxa do mercado",
  "deposito Bancario",
  "TARIFA espacial",
];

let totalTaxa = 0;
transacoes2.forEach(item => {
  const itemForm = item.toLocaleLowerCase().trim();
  if(itemForm.includes('taxa')) {
    totalTaxa += 1;
  }
})
console.log(totalTaxa) // 3
