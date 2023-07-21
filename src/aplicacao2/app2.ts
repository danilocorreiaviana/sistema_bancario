import Endereco from "../models/endereco";
import Cliente from "../models/cliente";

const cliente = new Cliente('777.888.999-00', 'Ana Maria Silva', '(88)98814-2789', false);
const endereco1 = new Endereco("63122-440", "Avenida Padre Cícero", "123", "Apto 1", "Crato", "CE");
const endereco2 = new Endereco("23937-015", "Rua Ilha do Senhor do Bonfim", "456", "Casa 2", "Angra dos Reis", "RJ");
const endereco3 = new Endereco("06065-192", "Rua Doutor Miguel Ferreira", "789", "Casa 3", "Osasco", "SP");

cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);

console.log(cliente.exibirDados());
console.log(cliente.listarEnderecos());