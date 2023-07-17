import Conta from "./conta";

class ContaCorrente extends Conta {
    private limite: number;
    private saldoinicio: number = 0;

    constructor(numero: string, limite: number) {
        super(numero)
        this.limite = limite;
    }

    public getLimite(): number {
        return this.limite;
    }

    public setLimite(limite: number): void {
        this.limite = limite;
    }

    public getSaldo(): number {
        return this.calcularSaldo();
    }

    public sacar(valor: number) {
        let saldo = this.getSaldo();
        let limiteTotal = this.getValorTotal();
        if (valor > limiteTotal) {
            console.log("Limite excedido!")
        } else if (valor < limiteTotal && saldo === 0) {
            this.limite -= valor;
        } else if (limiteTotal === valor && saldo > 0) {
            this.limite = 0;
            this.saldoinicio = saldo - valor;
        } else {
            super.sacar(valor);
        }

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
        if (this.limite == 0) {
            saldo = this.saldoinicio;
            return saldo;
        } else {
            return saldo;
        }

    }

    public getValorTotal(): number {
        return this.calcularSaldo() + this.limite;
    }

}
export default ContaCorrente;