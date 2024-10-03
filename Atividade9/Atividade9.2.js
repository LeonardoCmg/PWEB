var a =prompt("Insira o primeiro valor: ");
var b =prompt("Insira o segundo valor: ");
var c =prompt("Insira o terceiro valor: ");
function ordenarNum(a, b, c) { 
    let numeros = [a, b, c];
    numeros.sort((x,y) => x - y);
    return numeros;
}
alert("Números ordenados: " + ordenarNum(a, b, c));