import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { EmpreRoutingModule } from './routing/empre-routing.module';
import { EmpresaModule } from './empresa/empresa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    EmpreRoutingModule,
    BrowserModule,
    EmpresaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }