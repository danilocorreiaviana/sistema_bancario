import IUsuario from "./usuario";
import Pessoa from "./pessoa";
import Endereco from "./endereco";
import ContaCorrente from './contaCorrente';
import ContaPoupanca from "./contaPoupanca";

class Cliente extends Pessoa implements IUsuario {
    private vip: boolean;
    private enderecos: Endereco[]
    private contaCorrente: ContaCorrente;
    private contaPoupanca: ContaPoupanca;

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos = [];
    }

    public exibirDados(): string {
        return "\nCPF: " + this.getCpf() +
            "\nCliente: " + this.getNome() +
            "\nTelefone: " + this.getTelefone() +
            "\nVip: " + this.vip;
    }

    public exibirContaCorrente(): string {
        return "Cliente: " + this.getNome() +
            "\nConta: " + this.contaCorrente.getNumero() +
            "\nTipo: Conta Corrente " +
            "\nLimite (crédito): R$ " + this.contaCorrente.getLimite().toFixed(2) +
            "\nSaldo: R$ " + this.contaCorrente.getSaldo().toFixed(2) +
            "\nTotal: R$ " + this.contaCorrente.getValorTotal().toFixed(2);
    }

    public exibirContaPoupanca(): string {
        return "Cliente: " + this.getNome() +
            "\nConta: " + this.contaPoupanca.getNumero() +
            "\nTipo: Conta Poupança " +
            "\nSaldo: R$ " + this.contaPoupanca.getSaldo().toFixed(2) +
            "\nTotal: R$ " + this.contaPoupanca.getSaldo().toFixed(2);
    }

    public getContaCorrente(): ContaCorrente {
        return this.contaCorrente;
    }

    public setContaCorrente(contaCorrente: ContaCorrente): void {
        this.contaCorrente = contaCorrente;
    }

    public getContaPoupanca(): ContaPoupanca {
        return this.contaPoupanca;
    }

    public setContaPoupanca(contaPoupanca: ContaPoupanca): void {
        this.contaPoupanca = contaPoupanca;
    }

    public getVip(): boolean {
        return this.vip;
    }

    public setVip(vip: boolean): void {
        this.vip = vip;
    }

    public adicionarEndereco(endereco: Endereco): void {
        this.enderecos.push(endereco);
    }

    public listarEnderecos() {
        let enderecos = "";
        this.enderecos.forEach((endereco, index) => {
            enderecos +=
                "\n[Endereço " + (index + 1) + "]" +
                "\nCEP: " + endereco.getCep() +
                "\nLogradouro: " + endereco.getLogradouro() +
                "\nNº: " + endereco.getNumero() +
                "\nComplemento: " + endereco.getComplemento() +
                "\nCidade: " + endereco.getCidade() +
                "\nEstado: " + endereco.getUf() + "\n";
        });

        return enderecos;

    }

    autenticar(): boolean {
        return true;
    }
}

export default Cliente;