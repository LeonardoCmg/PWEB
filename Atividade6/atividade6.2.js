function operacao() {

        
    var numero1= prompt("digite o primeiro numero");
    var numero2= prompt("digite o segundo numero");
    var soma= parseFloat(numero1) + parseFloat(numero2);
    var sub= parseFloat(numero1) - parseFloat(numero2);
    var mult= parseFloat(numero1) * parseFloat(numero2);
    var div= parseFloat(numero1) / parseFloat(numero2);
    var resto= parseFloat(numero1) % parseFloat(numero2);
     alert("As operações:" + "\nnumero1: " + numero1 + "\nnumero2: " + numero2 + "\n\nA Soma é: " + soma + "\nA Subtração é: " + sub + "\nA Multiplicação é: " + mult + "\nA Divisão é: " + div + "\nO Resto é: " + resto );

 }