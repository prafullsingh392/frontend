import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubapisService } from './services/githubapis.service';
import { HeadersComponent } from './components/headers/headers.component';
import { MaterialeModule } from 'src/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialeModule
  ],
  providers: [GithubapisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
