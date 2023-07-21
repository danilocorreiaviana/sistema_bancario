import Cliente from "../models/cliente";
import ContaCorrente from "../models/contaCorrente";
import ContaPoupanca from "../models/contaPoupanca";

const contaCorrente = new ContaCorrente('3241', 100);
const contaPoupanca = new ContaPoupanca('4123');

const cliente = new Cliente('135.654.978-65', 'Antônio Ferreira', '(88)98828-8888', true);
const cliente2 = new Cliente('099.896.533-22', 'Carlos Emanuel', '(88)99929-9999', true);

cliente.setContaCorrente(contaCorrente);
cliente2.setContaPoupanca(contaPoupanca)

const clienteA = cliente.getContaCorrente();
const clienteB = cliente2.getContaPoupanca();

console.log("\n**************************************************************************");
console.log(clienteA.depositar(300));
console.log("**************************************************************************");
console.log(cliente.exibirContaCorrente());

console.log("\n**************************************************************************");
console.log(clienteB.depositar(100));
console.log("**************************************************************************");
console.log(cliente2.exibirContaPoupanca());

console.log("\n**************************************************************************");
console.log(clienteA.transferir(contaPoupanca, 1000));
console.log("**************************************************************************");

console.log("[REMETENTE]")
console.log(cliente.exibirContaCorrente());

console.log("\n[DESTINATÁRIO]")
console.log(cliente2.exibirContaPoupanca() + "\n");