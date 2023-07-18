import Cliente from "../models/cliente";
import ContaCorrente from "../models/contaCorrente";
import ContaPoupanca from "../models/contaPoupanca";

const contaCorrente = new ContaCorrente('3241', 100);
const contaPoupanca = new ContaPoupanca('4123');

const cliente = new Cliente('135.654.978-65', 'Antônio Ferreira', '8888888888', true);
const cliente2 = new Cliente('099.896.533-22', 'Carlos Emanuel', '8899999999', true);

cliente.setContaCorrente(contaCorrente);
cliente2.setContaPoupanca(contaPoupanca)

const exibirContaCliente = (contaCliente: Cliente) => {
    console.log('----------------------------------------------------')
    console.log("Conta do Cliente 1")
    console.log('----------------------------------------------------')
    console.log('Cliente:', contaCliente.getNome());
    console.log('Conta:', contaCliente.getContaCorrente().getNumero());
    console.log('Tipo:', contaCliente.getContaCorrente().getTipo());
    console.log('Limite (crédito): R$', contaCliente.getContaCorrente().getLimite().toFixed(2));
    console.log('Saldo: R$', contaCliente.getContaCorrente().calcularSaldo().toFixed(2));
    console.log('Total: R$', contaCliente.getContaCorrente().getValorTotal().toFixed(2));
};

const exibirContaCliente2 = (contaCliente: Cliente) => {
    console.log('----------------------------------------------------')
    console.log("Conta do Cliente 2")
    console.log('----------------------------------------------------')
    console.log('Cliente:', contaCliente.getNome());
    console.log('Conta:', contaCliente.getContaPoupanca().getNumero());
    console.log('Tipo:', contaCliente.getContaPoupanca().getTipo())
    console.log('Saldo: R$', contaCliente.getContaPoupanca().calcularSaldo().toFixed(2) + '\n');
};

cliente.getContaCorrente().depositar(300);
exibirContaCliente(cliente);
cliente2.getContaPoupanca().depositar(100)
exibirContaCliente2(cliente2);
cliente.getContaCorrente().transferir(contaPoupanca, 1000);
console.log("\nREMETENTE")
exibirContaCliente(cliente);
console.log("\nDESTINATÁRIO")
exibirContaCliente2(cliente2);