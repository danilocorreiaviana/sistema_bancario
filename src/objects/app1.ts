import Funcionario from "../classes/funcionario";
import Cargo from "../classes/cargo";

const funcionario1 = new Funcionario('12345678900', 'Joaquim', '88988888888', 62833.00,);
const cargoGerente = new Cargo('Gerente');
const funcionario2 = new Funcionario('09876543211', 'Francisco', '88999999999', 1418.00);
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