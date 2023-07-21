import Funcionario from "../models/funcionario";
import Cargo from "../models/cargo";

const funcionario1 = new Funcionario('123.456.789-00', 'Joaquim', '(88)98888-8888', 62833.00,);
const cargoGerente = new Cargo('Gerente');
const funcionario2 = new Funcionario('098.765.432-11', 'Francisco', '(88)99999-9999', 1418.00);
const cargoAtendente = new Cargo('Atendente');

console.log(funcionario1.exibirDados(cargoGerente));
console.log(funcionario2.exibirDados(cargoAtendente) + "\n");