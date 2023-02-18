import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { MaterialeModule } from 'src/material.module';
import { SearchResultComponent } from './components/search-result/search-result.component';



@NgModule({
  declarations: [
    HeadersComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    MaterialeModule
  ],
  exports:[
    HeadersComponent,
    SearchResultComponent
  ]
})
export class CommanModuleModule { }
