import Funcionario from "../models/funcionario";
import Cargo from "../models/cargo";

const funcionario1 = new Funcionario('123.456.789-00', 'Joaquim', '(88)98888-8888', 62833.00,);
const cargoGerente = new Cargo('Gerente');
const funcionario2 = new Funcionario('098.765.432-11', 'Francisco', '(88)99999-9999', 1418.00);
const cargoAtendente = new Cargo('Atendente');

const exibirFuncionario = (funcionario: Funcionario, cargo: Cargo, index: number) => {
    console.log('\n----------------------------------------------------')
    console.log(`FUNCIONÁRIO DO BANCO (${cargo.getNome()})`)
    console.log('----------------------------------------------------')
    console.log('CPF:', funcionario.getCpf());
    console.log('Funcionário:', funcionario.getNome());
    console.log('Telefone', funcionario.getTelefone());
    console.log('Salário: R$', funcionario.getSalario().toFixed(2));
    console.log('Cargo:', cargo.getNome());
    console.log('')
};

exibirFuncionario(funcionario1, cargoGerente, 1);
funcionario1.exercerCargo(cargoGerente);
exibirFuncionario(funcionario2, cargoAtendente, 2);
funcionario2.exercerCargo(cargoAtendente);