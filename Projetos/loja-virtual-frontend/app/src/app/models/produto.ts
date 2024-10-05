export class Produto {
  public id!: string;
  public nome: string;
  public descricao: string;
  public preco: number;
  public url_imagem: string;

  constructor(nome: string,
              descricao: string,
              preco: number,
              url_imagem: string) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.url_imagem = url_imagem;
  }
}
