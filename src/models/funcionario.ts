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

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public exercerCargo(cargo: Cargo): void {
        console.log("*********************************************************************")
        console.log(`O funcionário ${this.getNome()} está exercendo o cargo de ${cargo.getNome()} do banco.`);
        console.log("*********************************************************************\n")
    }

    autenticar(): boolean {
        return true;
    }
}

export default Funcionario;