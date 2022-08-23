import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { produto } from "./produto";
import { Observable } from "rxjs";




@Injectable()

export class ProdutoService{

    protected UrlServiceV1: string = "http://localhost:3000/" ;

    constructor(private http: HttpClient) { }

    obterProduto(): Observable<produto[]> {
       return this.http
       .get<produto[]>( this.UrlServiceV1 + "produtos");


    }

}