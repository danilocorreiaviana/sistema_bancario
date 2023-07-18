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

    public getEndereco(): void {
        console.log("\nCEP:", this.cep);
        console.log("Logradouro:", this.logradouro);
        console.log("Nº:", this.logradouro);
        console.log("Complemento:", this.complemento);
        console.log("Cidade:", this.cidade);
        console.log("Estado:", this.uf + "\n");
    }

}
export default Endereco;