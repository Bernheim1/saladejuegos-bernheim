import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../components/juegos/ahorcado/ahorcado.component';
import { JuegopropioComponent } from '../components/juegos/juegopropio/juegopropio.component';
import { MayorMenorComponent } from '../components/juegos/mayor-menor/mayor-menor.component';
import { JuegosComponent } from './juegos.component';
import { PreguntadosComponent} from '../components/juegos/preguntados/preguntados.component';

const routes: Routes = [
  { path: '', component: JuegosComponent },
  {path: 'ahorcado', component: AhorcadoComponent},
  {path: 'mayormenor', component: MayorMenorComponent},
  {path: 'juegopropio', component: JuegopropioComponent}, 
  {path: 'preguntados' , component: PreguntadosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
