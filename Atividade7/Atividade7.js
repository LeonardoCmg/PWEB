let userScore = 0;
let computerScore = 0;

function jogar(escolhaUsuario) {
    console.log('Escolha do usuário:', escolhaUsuario);
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];
    console.log('Escolha do computador:', escolhaComputador);
    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você ganhou!';
        userScore++;
    } else {
        resultado = 'Você perdeu!';
        computerScore++;
    }

    console.log('Resultado:', resultado);
    document.getElementById('result').innerText = `Você escolheu ${escolhaUsuario}, o computador escolheu ${escolhaComputador}. ${resultado}`;
    document.getElementById('userScore').innerText = userScore;
    document.getElementById('computerScore').innerText = computerScore;
}

function mostrarModal() {
    document.getElementById('myModal').style.display = "block";
}

function fecharModal() {
    document.getElementById('myModal').style.display = "none";
}