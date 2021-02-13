import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videoJuego/videoJuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";


const appRoutes: Routes = [
        {path: '', component: HomeComponent},
        {path: 'home', component: HomeComponent},
        {path: 'zapatillas', component: ZapatillasComponent},
        {path: 'videojuego', component: VideojuegoComponent},
        {path: 'cursos', component: CursosComponent},
        {path: 'cursos/:nombre/:followers', component: CursosComponent},
        {path: 'externo', component: ExternoComponent}, 
        {path: 'contacto', component: ContactoComponent},       
        {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
