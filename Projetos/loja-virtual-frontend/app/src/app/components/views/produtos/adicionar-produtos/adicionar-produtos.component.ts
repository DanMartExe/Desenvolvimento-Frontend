import { Component } from '@angular/core';
import { ProdutoService } from '../../../../services/produto.service';
import { Produto } from '../../../../models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrl: './adicionar-produtos.component.css'
})
export class AdicionarProdutosComponent {
  public nome!: string;
  public descricao!: string;
  public preco!: number;
  public url_imagem!: string;

  constructor(private produtoService: ProdutoService,
              private router: Router) { }

  public salvarProduto() {
    let produto = new Produto(
      this.nome,
      this.descricao,
      this.preco,
      this.url_imagem
    );

    this.produtoService.adicionarProduto(produto).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
