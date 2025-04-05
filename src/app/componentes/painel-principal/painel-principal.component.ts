import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.obterProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  excluirProduto(id: number) {
    if (confirm("Deseja realmente excluir este produto?")) {
      this.produtoService.deletarProduto(id).subscribe(() => {
        alert("Produto excluído com sucesso!");
        this.listarProdutos();
      });
    }
  }

  editarProduto(id: number) {
    this.router.navigate(['/cadastro-produto', id]);
  }
}
