import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Erro404Component } from './erro404/erro404.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@NgModule({
  declarations: [
    Erro404Component,
    HomeComponent
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
