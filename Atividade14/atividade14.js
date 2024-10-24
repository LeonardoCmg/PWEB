class TextTransformar {
    constructor() {
        this._texto = '';
    }

    get texto() {
        return this._texto;
    }

    set texto(novoTexto) {
        this._texto = novoTexto;
    }

    transformarMaiusculas() {
        return this._texto.toUpperCase();
    }

    transformarMinusculas() {
        return this._texto.toLowerCase();
    }
}

const transformar = new TextTransformar();

function transformarTexto() {
    const textoInput = document.getElementById('texto');
    const maiusculas = document.getElementById('maiusculas').checked;
    const minusculas = document.getElementById('minusculas').checked;

    transformar.texto = textoInput.value;

    if (maiusculas) {
        textoInput.value = transformar.transformarMaiusculas();
    } else if (minusculas) {
        textoInput.value = transformar.transformarMinusculas();
    }
}
