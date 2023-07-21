import Conta from "./conta";

class ContaPoupanca extends Conta {
    private saldoinicio: number = 0;

    constructor(numero: string) {
        super(numero)
    }

    public getSaldo(): number {
        return this.calcularSaldo();
    }

    public calcularSaldo(): number {
        const saldoInicial = this.saldoinicio;
        const saldoCredito = this.getCreditos().reduce(
            (total, credito) => total + credito.getValor(), 0
        );
        const saldoDebito = this.getDebitos().reduce(
            (total, debito) => total + debito.getValor(), 0
        );
        let saldo = saldoInicial + saldoCredito - saldoDebito;
        return saldo;

    }
}

export default ContaPoupanca;