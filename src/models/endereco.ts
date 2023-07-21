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

    public getCep(): string {
        return this.cep;
    }

    public getLogradouro(): string {
        return this.logradouro;
    }

    public getNumero(): string {
        return this.numero;
    }

    public getComplemento(): string {
        return this.complemento;
    }

    public getCidade(): string {
        return this.cidade;
    }

    public getUf(): string {
        return this.uf;
    }

}

export default Endereco;