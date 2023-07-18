import Cliente from "../models/cliente";
import ContaCorrente from "../models/contaCorrente";

const contaCorrente = new ContaCorrente('1234', 0);

const cliente = new Cliente('123.456.789-00', 'João Da Silva', '8888888888', true);

cliente.setContaCorrente(contaCorrente);

const exibirContaCliente = (contaCliente: Cliente) => {
    console.log('----------------------------------------------------')
    console.log("Conta do Cliente")
    console.log('----------------------------------------------------')
    console.log('Cliente:', contaCliente.getNome());
    console.log('Conta:', contaCliente.getContaCorrente().getNumero());
    console.log('Limite (crédito): R$', contaCliente.getContaCorrente().getLimite().toFixed(2));
    console.log('Saldo: R$', contaCliente.getContaCorrente().calcularSaldo().toFixed(2));
    console.log('Total: R$', contaCliente.getContaCorrente().getValorTotal().toFixed(2));
    console.log('')
};

cliente.getContaCorrente().depositar(100);
exibirContaCliente(cliente);
cliente.getContaCorrente().depositar(100);
exibirContaCliente(cliente);
cliente.getContaCorrente().depositar(100);
exibirContaCliente(cliente);
cliente.getContaCorrente().sacar(50);
exibirContaCliente(cliente);