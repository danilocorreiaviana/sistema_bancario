import IUsuario from "./usuario";
import Pessoa from "./pessoa";
import Endereco from "./endereco";

class Cliente extends Pessoa implements IUsuario {
    private vip: boolean;
    private enderecos: Endereco[]

    constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos = [];
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