import Conta from "./conta";
import Debito from "./debito";
import Credito from "./credito";

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
        let limiteTotal = this.getValorTotal();
        if (limiteTotal - valor >= 0) {
            if (valor > 0) {
                return super.sacar(valor);
            } else {
                return super.exibirErro('saque');
            }
        }
        else {
            return super.exibirTentativa(valor, 'sacar');
        }

    }

    public transferir(contaDestino: Conta, valor: number) {
        let limiteTotal = this.getValorTotal();
        if (limiteTotal - valor >= 0) {
            if (valor > 0) {
                const data = new Date();
                const debito = new Debito(valor, data);
                this.adicionarDebitos(debito);
                const credito = new Credito(valor, data);;
                contaDestino.adicionarCreditos(credito);
                const index = this.getDebitos().length - 1;
                const valorTransferencia = this.getDebitos()[index].getValor().toFixed(2);
                const dataFormatada = this.getDataFormatada(this.getDebitos()[index].getData());
                return super.exibirSucesso(valorTransferencia, dataFormatada, 'transferência');
            } else {
                return super.exibirErro('transferência');
            }

        } else {
            return super.exibirTentativa(valor, 'transferir');
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
        return saldo;

    }

    public getValorTotal(): number {
        return this.calcularSaldo() + this.limite;
    }

}

export default ContaCorrente;