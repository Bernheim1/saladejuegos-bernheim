import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pagina/login/login.component';
import { HomeComponent } from './pagina/home/home.component';
import { QuiensoyComponent } from './pagina/quiensoy/quiensoy.component';
import { ErrorComponent } from './pagina/error/error.component';
import { RegistroComponent } from './pagina/registro/registro.component';


const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'QuienSoy', component: QuiensoyComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
