import { Routes } from "@angular/router";
import { Features } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ListaProdutoComponent } from "./lista-produto/lista-produto/lista-produto.component";
import { HomeComponent } from "./navegacao/home/home.component";


export const rootRouterConfig: Routes = [
        {path: "", redirectTo: "/home" ,pathMatch: "full"},
        {path: "home", component: HomeComponent},
        {path: "contato", component: ContatoComponent},
        {path: "sobre", component: SobreComponent},
        {path: "features", component: Features},
        {path: "produtos", component: ListaProdutoComponent},
        {path: "produto-detalhe/:id", component: ListaProdutoComponent}
    ];