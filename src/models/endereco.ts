class Endereco {
    private cep: string;
    private logradouro: string;
    private numero: string;
    private complemento: string;
    private cidade: string;
    private uf: string;

    constructor(
        cep: string,
        logradouro: string,
        numero: string,
        complemento: string,
        cidade: string,
        uf: string
    ) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
    }

    public getEndereco(): string {
        return `${this.logradouro}, ${this.numero} - ${this.cidade}/${this.uf}, CEP: ${this.cep}, Complemento: ${this.complemento}`;
    }

}
export default Endereco;