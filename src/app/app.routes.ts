import {Routes} from "@angular/router"

import {FrontComponent} from "./front/front.component"
import {MenuAventureiroComponent} from "./menu-aventureiro/menu-aventureiro.component"

export const ROUTES: Routes = [
    {path: '', component: FrontComponent},
    {path: 'menu-aventureiro', component: MenuAventureiroComponent}
    
]