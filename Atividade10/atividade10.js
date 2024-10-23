function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    if (!altura || !peso) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }
    
    const imc = calcularValorIMC(peso, altura);
    const { classificacao, grauObesidade } = obterClassificacao(imc);
    
    mostrarResultado(imc, classificacao, grauObesidade);
}

function calcularValorIMC(peso, altura) {
    return peso / (altura * altura);
}

function obterClassificacao(imc) {
    let classificacao = '';
    let grauObesidade = '';

    if (imc < 18.5) {
        classificacao = 'MAGREZA';
        grauObesidade = '0';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'NORMAL';
        grauObesidade = '0';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'SOBREPESO';
        grauObesidade = 'I';
    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = 'OBESIDADE';
        grauObesidade = 'II';
    } else if (imc >= 40.0) {
        classificacao = 'OBESIDADE GRAVE';
        grauObesidade = 'III';
    }

    return { classificacao, grauObesidade };
}

function mostrarResultado(imc, classificacao, grauObesidade) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Seu IMC é ${imc.toFixed(2)}</p>
        <p>Classificação: ${classificacao}</p>
        <p>Grau de Obesidade: ${grauObesidade}</p>
    `;
}
