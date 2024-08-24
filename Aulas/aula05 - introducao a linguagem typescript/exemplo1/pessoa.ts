class Pessoa {
    private _nome: String
    private _idade: number

    constructor(nome: String, idade: number) {
        this._nome = nome
        this._idade = idade
    }

    public imprimeNome(nome: string): string {
        return nome
    }

    public get idade() {
        return this._idade
    }

    public set idade(idade: number) {
        this._idade = idade
    }
}


let pessoa = new Pessoa('Fukano', 10)

pessoa.imprimeNome('Fulano')

console.log(pessoa.idade)