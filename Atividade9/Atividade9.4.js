var a = parseFloat(prompt("Insira o valor do primeiro lado:"));
var b = parseFloat(prompt("Insira o valor do segundo lado:"));
var c = parseFloat(prompt("Insira o valor do terceiro lado:"));

function triangulo(a, b, c) {
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        if (a === b && b === c) {
            return alert("O Triângulo é Equilátero");
        } else if (a === b || a === c || b === c) {
            return alert("O Triângulo é Isósceles");
        } else {
            return alert("O Triângulo é Escaleno");
        }
    } else {
        return alert("Não forma um triângulo");
    }
}

triangulo(a, b, c);