import Credito from "./credito";
import Debito from "./debito";

abstract class Conta {
    private numero: string;
    private creditos: Credito[] = [];
    private debitos: Debito[] = [];

    constructor(numero: string) {
        this.numero = numero;
    }

    public getNumero(): string {
        return this.numero;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    public getCreditos(): Credito[] {
        return this.creditos;
    }

    public getDebitos(): Debito[] {
        return this.debitos;
    }

    public getDataFormatada(d: Date): string {
        let dia = d.getDate().toString().padStart(2, '0');
        let mes = (d.getMonth() + 1).toString().padStart(2, '0');
        let ano = d.getFullYear().toString();
        let hora = d.getHours().toString().padStart(2, '0');
        let min = d.getMinutes().toString().padStart(2, '0');
        let seg = d.getSeconds().toString().padStart(2, '0');
        const dataformatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + min + ":" + seg;
        return dataformatada;
    }

    public depositar(valor: number) {
        const data = new Date();
        const credito = new Credito(valor, data);
        this.creditos.push(credito);
        const index = this.creditos.length - 1;
        console.log("*******************************************");
        console.log("Depósito de R$ " + this.creditos[index].getValor().toFixed(2) + " realizado com sucesso!\n" +
            "Data da transação: " + this.getDataFormatada(this.creditos[index].getData()));
        console.log("*******************************************");
    }

    public sacar(valor: number) {
        const saldo = this.verificarSaldo();
        if (saldo - valor >= 0) {
            const data = new Date();
            const debito = new Debito(valor, data);
            this.debitos.push(debito);
            const index = this.debitos.length - 1;
            console.log("*******************************************");
            console.log("Saque de R$ " + this.debitos[index].getValor().toFixed(2) + " realizado com sucesso!\n" +
                "Data da transação: " + this.getDataFormatada(this.debitos[index].getData()));
            ;
            console.log("*******************************************");
        } else {
            console.log('Saldo insuficiente para saque');
        }
    }

    public verificarSaldo(): number {
        const saldoInicial = 0;
        const saldoCredito = this.creditos.reduce(
            (total, credito) => total + credito.getValor(),
            0
        );
        const saldoDebito = this.debitos.reduce(
            (total, debito) => total + debito.getValor(),
            0
        );
        const saldo = saldoInicial + saldoCredito - saldoDebito;
        return saldo;
    }
}

export default Conta;