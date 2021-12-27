var numeroSecreto = parseInt(Math.random() * 11)
var botaozinho = document.querySelector('input#reset')
var resposta = document.querySelector('div#resposta')
console.log(numeroSecreto)
var contador = 2

function chutar() {

    let msgErro = '[ERRO]O Numero informado é maior ou menor que 10. Por favor, insira um numero entre 0 e 10.'
    let msgAcerto = 'acertou'
    let msgErrado = `Você errou e tem ${contador} tentativas restantes! <br/> Tente outro numero.` 
    let msgChances = `Suas chances acabaram! <br/> O numero em que eu estava pensando era o <strong>${numeroSecreto}</strong>.<br/> Clique em reset pra tentar novamente.`

    console.log(numeroSecreto)
    var numeroDaSorte = parseInt(document.querySelector('input#numero').value)
    
    if (numeroDaSorte < 0 || numeroDaSorte > 10) {
        resposta.innerHTML = msgErro
    } else if (numeroDaSorte != numeroSecreto & contador > 0) {
        resposta.innerHTML = msgErrado 
        contador = contador - 1
    } else if (numeroDaSorte != numeroSecreto & contador == 0) {
        resposta.innerHTML = msgChances
    } else if (numeroDaSorte == numeroSecreto) {
        resposta.innerHTML = msgAcerto
    } else {
        resposta.innerHTML = 'qq houve aqui?' 
     
}
}

function resetar() {
   // window.location.reload('atualizar')
   contador = 2
   resposta.innerHTML = ''
   numeroSecreto = parseInt(Math.random() * 11)
}