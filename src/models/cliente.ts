import IUsuario from "./usuario";
import Pessoa from "./pessoa";
import Endereco from "./endereco";
import ContaCorrente from './contaCorrente';

class Cliente extends Pessoa implements IUsuario {
    private vip: boolean;
    private enderecos: Endereco[]
    private contaCorrente: ContaCorrente;

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
        this.enderecos.forEach((endereço) => {
            console.log(endereço.getEndereco());
        });
    }

    autenticar(): boolean {
        return true;
    }
}

export default Cliente;