import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdlModule } from '@angular-mdl/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { MainRoutingModule } from './routing/main-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainRoutingModule,
    MainModule,
    MdlModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
