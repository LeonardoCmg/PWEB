
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set nomeCorrentista(nome) {
        this._nomeCorrentista = nome;
    }

    get banco() {
        return this._banco;
    }

    set banco(banco) {
        this._banco = banco;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(numero) {
        this._numeroConta = numero;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    get dadosConta() {
        return `Nome: ${this.nomeCorrentista}, Banco: ${this.banco}, Número da Conta: ${this.numeroConta}, Saldo: ${this.saldo}`;
    }
}


class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }

    set saldoEspecial(saldoEspecial) {
        this._saldoEspecial = saldoEspecial;
    }

    get dadosCorrente() {
        return `${this.dadosConta}, Saldo Especial: ${this.saldoEspecial}`;
    }
}


class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() {
        return this._juros;
    }

    set juros(juros) {
        this._juros = juros;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }

    set dataVencimento(dataVencimento) {
        this._dataVencimento = dataVencimento;
    }

    get dadosPoupanca() {
        return `${this.dadosConta}, Juros: ${this.juros}, Data de Vencimento: ${this.dataVencimento}`;
    }
}


function criarContaCorrente() {
    const nomeCorrentista = prompt("Digite o nome do correntista:");
    const banco = prompt("Digite o banco:");
    const numeroConta = prompt("Digite o número da conta:");
    const saldo = parseFloat(prompt("Digite o saldo:"));
    const saldoEspecial = parseFloat(prompt("Digite o saldo especial da conta corrente:"));

    const contaCorrente = new Corrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial);

    document.getElementById('resultado').innerHTML = `
        <h2>Conta Corrente:</h2>
        <p>${contaCorrente.dadosCorrente}</p>
    `;
}


function criarContaPoupanca() {
    const nomeCorrentista = prompt("Digite o nome do correntista:");
    const banco = prompt("Digite o banco:");
    const numeroConta = prompt("Digite o número da conta:");
    const saldo = parseFloat(prompt("Digite o saldo:"));
    const juros = parseFloat(prompt("Digite os juros da conta poupança:"));
    const dataVencimento = prompt("Digite a data de vencimento da conta poupança:");

    const contaPoupanca = new Poupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento);

    document.getElementById('resultado').innerHTML = `
        <h2>Conta Poupança:</h2>
        <p>${contaPoupanca.dadosPoupanca}</p>
    `;
}
