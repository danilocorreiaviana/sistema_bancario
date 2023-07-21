import Cliente from "../models/cliente";
import ContaCorrente from "../models/contaCorrente";
import ContaPoupanca from "../models/contaPoupanca";

const contaCorrente = new ContaCorrente('1234', 0);
const contaPoupanca = new ContaPoupanca('4321');

const cliente = new Cliente('123.456.789-00', 'João Da Silva', '(88)98878-9888', true);
const cliente2 = new Cliente('009.876.543-21', 'Felipe Castro', '(88)99979-8999', true);

cliente.setContaCorrente(contaCorrente);
cliente2.setContaPoupanca(contaPoupanca)

const clienteA = cliente.getContaCorrente();
const clienteB = cliente2.getContaPoupanca();

console.log("\n**************************************************************************");
console.log(clienteA.depositar(1000));
console.log("**************************************************************************");
console.log(cliente.exibirContaCorrente());

console.log("\n**************************************************************************");
console.log(clienteB.depositar(1000));
console.log("**************************************************************************");
console.log(cliente2.exibirContaPoupanca());

console.log("\n**************************************************************************");
console.log(clienteA.transferir(contaPoupanca, 500));
console.log("**************************************************************************");

console.log("[REMETENTE]")
console.log(cliente.exibirContaCorrente());

console.log("\n[DESTINATÁRIO]")
console.log(cliente2.exibirContaPoupanca() + "\n");