const pessoas = [];
const maxPessoas = 45;

function adicionarPessoa() {
    if (pessoas.length >= maxPessoas) {
        alert("Você já adicionou todas as 45 pessoas!");
        return;
    }

    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    pessoas.push({ idade, sexo, opiniao });
    
    calcularResultados();
}

// Alteração de teste para integração ClickUp
console.log("Teste com ClickUp [CU-86a8wjw6z]");



function calcularResultados() {
    if (pessoas.length === 0) return;

    let somaIdade = 0;
    let idadeMax = 0;
    let idadeMin = Infinity;
    let totalPessimo = 0;
    let totalOtimoBom = 0;
    let totalMasculino = 0;
    let totalFeminino = 0;

    pessoas.forEach(pessoa => {
        somaIdade += pessoa.idade;
        if (pessoa.idade > idadeMax) idadeMax = pessoa.idade;
        if (pessoa.idade < idadeMin) idadeMin = pessoa.idade;
        if (pessoa.opiniao === 1) totalPessimo++;
        if (pessoa.opiniao === 4 || pessoa.opiniao === 3) totalOtimoBom++;
        if (pessoa.sexo === 'M') totalMasculino++;
        if (pessoa.sexo === 'F') totalFeminino++;
    });

    const mediaIdade = (somaIdade / pessoas.length).toFixed(2);
    const percentualOtimoBom = ((totalOtimoBom / pessoas.length) * 100).toFixed(2) + '%';

    document.getElementById('mediaIdade').innerText = `Média da Idade: ${mediaIdade}`;
    document.getElementById('idadeMax').innerText = `Idade da Pessoa Mais Velha: ${idadeMax}`;
    document.getElementById('idadeMin').innerText = `Idade da Pessoa Mais Nova: ${idadeMin}`;
    document.getElementById('totalPessimo').innerText = `Total de Pessoas que Responderam Péssimo: ${totalPessimo}`;
    document.getElementById('percentualOtimoBom').innerText = `Percentual de Ótimo e Bom: ${percentualOtimoBom}`;
    document.getElementById('totalSexo').innerText = `Total de Homens: ${totalMasculino}, Total de Mulheres: ${totalFeminino}`;
}
