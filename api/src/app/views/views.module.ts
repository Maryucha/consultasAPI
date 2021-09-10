import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { ListagemComponent } from './listagem/listagem.component';
import { FormularioComponent } from './formulario/formulario.component'

@NgModule({
  declarations: [
    Erro404Component,
    HomeComponent,
    ListagemComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    WavesModule,
    CarouselModule
  ],
  exports: [
    Erro404Component
  ]
})
export class ViewsModule { }
