import Pessoa from "./pessoa";
import Cargo from "./cargo";
import IUsuario from "./usuario";

class Funcionario extends Pessoa implements IUsuario {
    private salario: number;

    constructor(cpf: string, nome: string, telefone: string, salario: number) {
        super(cpf, nome, telefone);
        this.salario = salario;
    }

    public getSalario(): number {
        return this.salario;
    }

    // public setSalario(salario: number): void {
    //     this.salario = salario;
    // }

    public exibirDados(cargo: Cargo) {
        return "\nCPF: " + this.getCpf() +
            "\nFuncionário: " + this.getNome() +
            "\nTelefone: " + this.getTelefone() +
            "\nSalário: R$ " + this.salario.toFixed(2) +
            "\nCargo: " + cargo.getNome();
    }

    public exercerCargo(cargo: Cargo) {
        return `O funcionário ${this.getNome()} está exercendo o cargo de ${cargo.getNome()} do banco.`;
    }

    autenticar(): boolean {
        return true;
    }
}

export default Funcionario;