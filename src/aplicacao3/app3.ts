import Cliente from "../models/cliente";
import ContaCorrente from "../models/contaCorrente";

const contaCorrente = new ContaCorrente('1234', 0);

const cliente = new Cliente('123.456.789-00', 'João Da Silva', '(88)98878-9888', true);

cliente.setContaCorrente(contaCorrente);
const clienteA = cliente.getContaCorrente();

console.log("\n**************************************************************************");
console.log(clienteA.depositar(100));
console.log("**************************************************************************");
console.log(cliente.exibirContaCorrente());
console.log("\n**************************************************************************");
console.log(clienteA.depositar(100));
console.log("**************************************************************************");
console.log(cliente.exibirContaCorrente());
console.log("\n**************************************************************************");
console.log(clienteA.depositar(100));
console.log("**************************************************************************");
console.log(cliente.exibirContaCorrente());
console.log("\n**************************************************************************");
console.log(clienteA.sacar(50));
console.log("**************************************************************************");
console.log(cliente.exibirContaCorrente() + "\n");