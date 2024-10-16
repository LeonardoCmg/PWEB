var somaIdades = 0;
var idadeMaisVelha = 0;
var idadeMaisNova = Number.MAX_VALUE;;
var pessoasPessimo = 0;
var pessoasOtimoBom = 0;
var mulheres = 0;
var homens = 0;
var totalPessoas = 0;

var continuar = true;

while (continuar) {
    var idade = parseInt(prompt("Informe a sua idade:"));
    var sexo = prompt("Informe o seu sexo (M - Masculino ou F - Feminino):").toUpperCase();
    var opiniao = parseInt(prompt("Avaliação do Filme\n\n1 - Péssimo \n2 - Regular \n3 - Bom \n4 - Ótimo\n\nInforme a opinião:"));

    // Atualizar resultados
    somaIdades += idade;
    idadeMaisVelha = Math.max(idade, idadeMaisVelha);
    idadeMaisNova = Math.min(idade, idadeMaisNova);

    if (opiniao === 1) {
        pessoasPessimo++;
    } else if (opiniao === 3 || opiniao === 4) {
        pessoasOtimoBom++;
    }
    if (sexo === 'F') {
        mulheres++;
    } else if (sexo === 'M') {
        homens++;
    }

    totalPessoas++;

    continuar = confirm("Deseja adicionar mais uma pessoa?");
}

var mediaIdade = somaIdades / totalPessoas;

var porcentagemOtimoBom = (pessoasOtimoBom / totalPessoas) * 100;

alert("Média da idade das pessoas: " + mediaIdade.toFixed(2) +
      "\nIdade da pessoa mais velha: " + idadeMaisVelha +
      "\nIdade da pessoa mais nova: " + idadeMaisNova +
      "\nQuantidade de pessoas que responderam péssimo: " + pessoasPessimo +
      "\nPorcentagem de pessoas que responderam ótimo e bom: " + porcentagemOtimoBom.toFixed(2) + "%" +
      "\nNúmero de mulheres e homens que responderam ao questionário: " +
      "\nMulheres: " + mulheres +
      "\nHomens: " + homens);