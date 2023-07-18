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

    public listarEndereco(): void {
        console.log(`\nCliente: ${this.getNome()}`)
        console.log(`Cpf: ${this.getCpf()}`)
        console.log(`Telefone: ${this.getTelefone()}`)
        console.log(`Vip: ${this.getVip()}\n`)
        this.enderecos.forEach((endereco, index) => {
            console.log(`[Endereço ${(index + 1).toString()}]`)
            endereco.getEndereco();
        });
    }

    autenticar(): boolean {
        return true;
    }
}

export default Cliente;