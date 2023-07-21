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

    public getCreditos(): Credito[] {
        return this.creditos;
    }

    public adicionarCreditos(credito: Credito): void {
        this.creditos.push(credito);
    }

    public getDebitos(): Debito[] {
        return this.debitos;
    }

    public adicionarDebitos(debito: Debito): void {
        this.debitos.push(debito);
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

    public exibirSucesso(valor: string, dataFormatada: string, operacao: string) {
        return "Operação de " + operacao + " no valor de R$ " + valor + " realizada com sucesso!\n" +
            "Data da transação: " + dataFormatada;
    }

    public exibirTentativa(valor: number, acao: string) {
        return `Tentou ${acao} R$ ${(valor).toFixed(2)}, mas o valor não é suficiente para a operação!`
    }

    public exibirErro(operacao: string) {
        return `Erro de ${operacao}! O valor inserido precisa ser maior que R$ 0,00!`;
    }

    public depositar(valor: number) {
        if (valor > 0) {
            const data = new Date();
            const credito = new Credito(valor, data);
            this.creditos.push(credito);
            const index = this.creditos.length - 1;
            const valorDeposito = this.creditos[index].getValor().toFixed(2);
            const dataFormatada = this.getDataFormatada(this.creditos[index].getData());
            return this.exibirSucesso(valorDeposito, dataFormatada, "depósito");
        } else {
            return this.exibirErro('depósito');
        }

    }

    public sacar(valor: number) {
        const data = new Date();
        const debito = new Debito(valor, data);
        this.adicionarDebitos(debito);
        const index = this.getDebitos().length - 1;
        const valorSaque = this.getDebitos()[index].getValor().toFixed(2);
        const dataFormatada = this.getDataFormatada(this.getDebitos()[index].getData());
        return this.exibirSucesso(valorSaque, dataFormatada, "saque");
    }
}

export default Conta;