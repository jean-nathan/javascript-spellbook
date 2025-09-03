let inputName = document.querySelector('#name')
let copiar = document.querySelector('#copiar')


  // copiar.addEventListener('click', () => {
  //   // Pega o valor do input
  //   const texto = inputName.value;

  //   // Copia para a área de transferência
  //   navigator.clipboard.writeText(texto).then(() => {
  //     alert('Texto copiado!');
  //   }).catch(err => {
  //     alert('Falha ao copiar texto: ', err);
  //   });
  // });

// inputName.addEventListener('keyup', () => {
//   let nomeSemEspacos = inputName.value.trim()

//   let isNumber = !isNaN(Number(nomeSemEspacos))
//   let isCaractere = /[^a-zA-Z0-9]/.test(nomeSemEspacos)

//   if (isNumber || isCaractere) {
//     // desabilita o botão
//     buttonEnviar.disabled = true
//   } else {
//     // habilita o botão
//     buttonEnviar.disabled = false
//   }
// })


// let saldo = 1000;
// let saque = 200;
// let taxaAdmin = 5;

// // Aplicando taxa apenas se saque for maior que 100
// saldo -= saque; // 800
// saldo -= saque > 100 ? taxaAdmin : 0; 795

// console.log(`Saldo restante: ${saldo}`); // 795
