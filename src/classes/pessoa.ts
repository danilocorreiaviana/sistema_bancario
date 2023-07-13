abstract class Pessoa {
    //Criação dos atributos privados
    private cpf: string;
    private nome: string;
    private telefone: string;

    constructor(cpf: string, nome: string, telefone: string) {
        this.cpf = this.formatarCPF(cpf);
        this.nome = nome;
        this.telefone = this.formatarTelefone(telefone);
    }

    //Criação de métodos para obter e setar cada atributo separadamente
    public getCpf(): string {
        return this.formatarCPF(this.cpf);
    }

    public setCpf(cpf: string): void {
        this.cpf = this.formatarCPF(cpf);
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getTelefone(): string {
        return this.formatarTelefone(this.telefone);
    }

    public setTelefone(telefone: string): void {
        this.telefone = this.formatarTelefone(telefone);
    }

    private formatarCPF(cpf: string): string {
        return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    }

    private formatarTelefone(telefone: string): string {
        return telefone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }

}

export default Pessoa;