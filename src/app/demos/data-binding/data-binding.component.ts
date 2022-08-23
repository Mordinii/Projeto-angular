import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: "data-binding.component.html"})

export class Features {  

   public contador: number = 0;
   
   public UrlImagem: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png"

   public nome: string = ""

   botao(){ 

    this.contador++; } 

   zerar(){

    this.contador = 0; }

   KeyUp(event: any){

    this.nome = event.target.value

   }
  
  
  }

