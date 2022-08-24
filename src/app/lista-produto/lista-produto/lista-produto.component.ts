import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';
import { ProdutoService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: "lista-produto.component.html"
   
})

export class ListaProdutoComponent implements OnInit { 


  constructor( private ProdutoService: ProdutoService ) { }

  public produtos: Produto[] | undefined;

  ngOnInit() {
    this.ProdutoService.obterProduto()
    .subscribe(
      item => {
        this.produtos = item;
        console.log(item);
      }

    )
      
    
  }



}

