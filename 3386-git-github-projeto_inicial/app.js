// Função para verificar o chute do usuário
function verificarChute() {
    const chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirMensagemAcerto();
    } else {
        exibirMensagemErro(chute);
    }
    tentativas++;
    limparCampo();
}

// Função para exibir a mensagem de acerto
function exibirMensagemAcerto() {
    exibirTextoNaTela('h1', 'Acertou!');
    congit st palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    const mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
}

// Função para exibir a mensagem de erro
function exibirMensagemErro(chute) {
    if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
}

// Função para limpar o campo de entrada
function limparCampo() {
    document.querySelector('input').value = '';
}

// Função para gerar um número aleatório
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * numeroLimite) + 1;
}