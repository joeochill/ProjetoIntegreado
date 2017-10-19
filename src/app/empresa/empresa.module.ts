import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './cadastro/cadatros.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { EmpreRoutingModule } from '../routing/empre-routing.module'


@NgModule({
    imports:[
        CommonModule,
        EmpreRoutingModule
    ],
    declarations:[
        MainComponent,
        LoginComponent,
        CadastroComponent
    ],
    exports:[
        MainComponent,
        LoginComponent,
        CadastroComponent
    ]
})
export class EmpresaModule{}