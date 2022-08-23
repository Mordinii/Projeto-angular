import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { RouterModule } from '@angular/router';
import { Features } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './lista-produto/lista-produto/lista-produto.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent,
    Features,
    ListaProdutoComponent  ],
  imports: [
    FormsModule,
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash:false })]
  ],
  providers: [ ProdutoService,{ provide: APP_BASE_HREF, useValue: "/"}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
