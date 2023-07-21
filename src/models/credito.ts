class Credito {
    private valor: number;
    private data: Date;

    constructor(valor: number, data: Date) {
        this.valor = valor;
        this.data = data;
    }

    public getValor(): number {
        return this.valor;
    }

    public getData(): Date {
        return this.data;
    }

}

export default Credito;