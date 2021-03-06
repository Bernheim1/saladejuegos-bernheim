import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pagina/login/login.component';
import { HomeComponent } from './pagina/home/home.component';
import { QuiensoyComponent } from './pagina/quiensoy/quiensoy.component';
import { ErrorComponent } from './pagina/error/error.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'quiensoy', component: QuiensoyComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
    {path: 'saladejuegos', loadChildren: () => import('./juegos/juegos.module').then(m => m.JuegosModule), canActivate: [AuthGuard] },
    {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

