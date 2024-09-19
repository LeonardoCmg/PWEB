nome = prompt("Qual é o seu nome?");



var nota1,nota2,nota3,nota4,media;

nota1 = prompt("Qual foi sua primeira nota?");
nota2 = prompt("Qual foi sua segunda nota?");
nota3 = prompt("Qual foi sua terceira nota?");
nota4 = prompt("Qual foi sua quarta nota?");
media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4;
alert("A média do " + nome + " é "+media.toFixed(2));