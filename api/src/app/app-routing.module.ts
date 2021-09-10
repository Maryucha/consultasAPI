import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erro404Component } from './views/erro404/erro404.component';
import { HomeComponent } from './views/home/home.component';
import { ListagemComponent } from './views/listagem/listagem.component';
import { FormularioComponent } from './views/formulario/formulario.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'listagem',
    component: ListagemComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: '**',
    component: Erro404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
