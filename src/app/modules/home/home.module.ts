import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialeModule } from 'src/material.module';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchResultComponent
  ],
  imports: [
    MaterialeModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
