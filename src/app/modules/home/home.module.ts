import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialeModule } from 'src/material.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MaterialeModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
