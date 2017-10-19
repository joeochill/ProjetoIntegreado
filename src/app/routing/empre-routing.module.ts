import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from '../empresa/cadastro/cadatros.component'
import { MainComponent } from '../empresa/main/main.component';
import { LoginComponent } from '../empresa/login/login.component';

const empreRoutes: Routes =[
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(empreRoutes)
    ],
    exports: [
        RouterModule
    ]
    
})
export class EmpreRoutingModule{}