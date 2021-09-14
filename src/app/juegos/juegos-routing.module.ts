import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../components/juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../components/juegos/mayor-menor/mayor-menor.component';
import { JuegosComponent } from './juegos.component';

const routes: Routes = [
  { path: '', component: JuegosComponent },
  {path: 'ahorcado', component: AhorcadoComponent},
  {path: 'mayormenor', component: MayorMenorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
