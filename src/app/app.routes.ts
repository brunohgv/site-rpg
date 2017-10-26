import {Routes} from "@angular/router"

import {FrontComponent} from "./front/front.component"
import {MenuAventureiroComponent} from "./menu-aventureiro/menu-aventureiro.component"
import {CatalogoMesasComponent} from "./catalogo-mesas/catalogo-mesas.component"
import {CadastroComponent} from "./cadastro/cadastro.component"
import {LoginComponent} from "./login/login.component"

export const ROUTES: Routes = [
    {path: '', component: FrontComponent},
    {path: 'menu-aventureiro', component: MenuAventureiroComponent},
    {path: 'catalogo-mesas', component: CatalogoMesasComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'login', component: LoginComponent}
]