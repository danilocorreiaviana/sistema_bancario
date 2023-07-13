import Funcionario from "../models/funcionario";
import Cargo from "../models/cargo";

const funcionario1 = new Funcionario('123.456.789-00', 'Joaquim', '(88)98888-8888', 62833.00,);
const cargoGerente = new Cargo('Gerente');
const funcionario2 = new Funcionario('098.765.432-11', 'Francisco', '(88)99999-9999', 1418.00);
const cargoAtendente = new Cargo('Atendente');
console.log("--------------------------------------------")
console.log("APP1 - CRIAÇÃO DE DOIS FUNCIONÁRIOS DO BANCO")
console.log("--------------------------------------------")
console.log("FUNCIONÁRIO 1")
console.log(funcionario1)
console.log(funcionario1.getNome() + " está autenticado? ", funcionario1.autenticar());
funcionario1.exercerCargo(cargoGerente);
console.log("--------------------------------------")
console.log("FUNCIONÁRIO 2")
console.log(funcionario2)
console.log(funcionario2.getNome() + " está autenticado? ", funcionario2.autenticar());
funcionario2.exercerCargo(cargoAtendente);
console.log("--------------------------------------")