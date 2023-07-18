import Conta from "./conta";
import Debito from "./debito";
import Credito from "./credito";

class ContaCorrente extends Conta {
    private limite: number;
    private saldoinicio: number = 0;
    private tipo: string = "Conta Corrente"

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

    public getTipo(): string {
        return this.tipo;
    }

    public sacar(valor: number) {
        let limiteTotal = this.getValorTotal();
        if (limiteTotal - valor >= 0) {
            if (valor > 0) {
                super.sacar(valor);
            } else {
                console.log("--------------------------------------------------------------");
                console.log("Erro no saque! O valor de saque precisa ser maior que R$ 0,00!")
                console.log("--------------------------------------------------------------");
            }
        }
        else {
            console.log("----------------------------------------------------------------------------------");
            console.log("Tentou sacar R$ " + valor.toFixed(2) + ", mas o valor não é suficiente para saque!")
            console.log("----------------------------------------------------------------------------------");
        }

    }

    public transferir(contaDestino: Conta, valor: number) {
        let limiteTotal = this.getValorTotal();
        if (limiteTotal - valor >= 0) {
            if (valor > 0) {
                const data = new Date();
                const debito = new Debito(valor, data);
                this.setDebitos(debito);
                const credito = new Credito(valor, data);;
                contaDestino.setCreditos(credito);
                const index = this.getDebitos().length - 1;
                console.log("\n*******************************************");
                console.log("Transferência de R$ " + this.getDebitos()[index].getValor().toFixed(2) + " realizada com sucesso!\n" +
                    "Data da transação: " + this.getDataFormatada(this.getDebitos()[index].getData()));
                console.log("*******************************************");
            } else {
                console.log("-------------------------------------------------------------------------------");
                console.log("Erro na transferência! O valor de transferência precisa ser maior que R$ 0,00!")
                console.log("-------------------------------------------------------------------------------");
            }

        } else {
            console.log("--------------------------------------------------------------------------------------------");
            console.log("Tentou transferir R$ " + valor.toFixed(2) + ", mas o valor não é suficiente para transferir!")
            console.log("--------------------------------------------------------------------------------------------");
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