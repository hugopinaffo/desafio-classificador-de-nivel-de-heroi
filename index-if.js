// Solução para o desafio utilizando a estrutura de decisão IF 

// Variáveis de dados
const nomeDoHeroi = "Tanjirō Kamado"
let quantidadeDeXpDoHeroi = 0
let nivelDoHeroi = ""

//Função estruturada com a estrutura de decisão IF para atualizar o nível do héroi com base na quantidade de xp do herói
function atualizarNivel () {
  if (quantidadeDeXpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro"
  } else if (quantidadeDeXpDoHeroi >= 1000 && quantidadeDeXpDoHeroi < 2000){ 
    nivelDoHeroi = "Bronze"
  } else if (quantidadeDeXpDoHeroi >= 2000  && quantidadeDeXpDoHeroi < 5000) {
    nivelDoHeroi = "Prata"
  } else if (quantidadeDeXpDoHeroi >= 5000  && quantidadeDeXpDoHeroi < 7000) {
    nivelDoHeroi = "Ouro"
  } else if (quantidadeDeXpDoHeroi >= 7000  && quantidadeDeXpDoHeroi < 8000) {
    nivelDoHeroi = "Platina"
  } else if (quantidadeDeXpDoHeroi >= 8000  && quantidadeDeXpDoHeroi < 9000) {
    nivelDoHeroi = "Ascendente"
  } else if (quantidadeDeXpDoHeroi >= 9000  && quantidadeDeXpDoHeroi < 10000) {
    nivelDoHeroi = "Imortal"
  } else {
    nivelDoHeroi = "Radiante"
  }
}

// Função parar gerar uma mensagem de saida com o nivel do heroi atualizado
function gerarMensagemDeSaida() {
  return `O herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`
}

// Testando: 5 inimigos foram eliminados e o herói ganhou 100 de xp em cada eliminação, ou seja, 500xp
quantidadeDeXpDoHeroi += 500
console.log("XP no primeiro teste = " + quantidadeDeXpDoHeroi)
atualizarNivel()
console.log(gerarMensagemDeSaida())

// Testando: 1 chefão foi eliminado e o herói ganhou 1000 de xp
quantidadeDeXpDoHeroi += 1000
atualizarNivel()
console.log("XP no segundo teste= " + quantidadeDeXpDoHeroi)
console.log(gerarMensagemDeSaida())

// Testando: 3 chefões foram eliminados e o herói ganhou 3000 de xp
quantidadeDeXpDoHeroi += 3000
atualizarNivel()
console.log("XP no terceiro teste= " + quantidadeDeXpDoHeroi)
console.log(gerarMensagemDeSaida())

// Testando: 20 inimigos foram eliminados e o héroi ganhou 2000 de xp
quantidadeDeXpDoHeroi += 2000
atualizarNivel()
console.log("XP no quarto teste= " + quantidadeDeXpDoHeroi)
console.log(gerarMensagemDeSaida())

// Testando: 1 mega chefão foi eliminado e o herói ganhou 1300 de xp
quantidadeDeXpDoHeroi += 1300
atualizarNivel()
console.log("XP no quarto teste= " + quantidadeDeXpDoHeroi)
console.log(gerarMensagemDeSaida())

// Testando: 8 inimigos foram eliminados e o herói ganhou 800 de xp
quantidadeDeXpDoHeroi += 800
atualizarNivel()
console.log("XP no quarto teste= " + quantidadeDeXpDoHeroi)
console.log(gerarMensagemDeSaida())

// Testando: 8 inimigos foram eliminados e o herói ganhou 800 de xp
quantidadeDeXpDoHeroi += 800
atualizarNivel()
console.log("XP no quarto teste= " + quantidadeDeXpDoHeroi)
console.log(gerarMensagemDeSaida())

// Testando: 1 mega chefão foi eliminado e o herói ganhou 1300 de xp
quantidadeDeXpDoHeroi += 800
atualizarNivel()
console.log("XP no quarto teste= " + quantidadeDeXpDoHeroi)
console.log(gerarMensagemDeSaida())