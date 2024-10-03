var texto = prompt("Insira um texto para saber se é um palíndromo: "); 

function palindromo(texto) {
    let j = texto.length - 1;

    for (let i = 0; i < j; i++, j--) {
        if (texto[i].toUpperCase() !== texto[j].toUpperCase()) {
            return alert("Não é um palíndromo");
        }
    }
    return alert("É um palíndromo");
}

palindromo(texto);