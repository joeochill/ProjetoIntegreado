import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventoEmpComponent } from '../main/empresa/evento/eventoEmp.component'
import { ExperenciaUsuComponent } from '../main/usuario/experiencia/experenciaUsu.component'
import { GroupUsuComponent } from '../main/usuario/group/groupUsu.component'
import { LoginUsuComponent } from '../main/usuario/login/loginUsu.component';
import { LoginEmpComponent } from '../main/empresa/login/loginEmp.component';
import { MainComponent } from '../main/main.component';
import { MainEmpComponent } from '../main/empresa/main/mainEmp.component';
import { MainUsuComponent } from '../main/usuario/main/mainUsu.component';
import { PerfilEmpComponent } from '../main/empresa/perfil/perfilEmp.component'
import { PerfilUsuComponent } from '../main/usuario/perfil/perfilUsu.component';
import { VagasEmpComponent } from '../main/empresa/vagas/vagasEmp.component'

const mainRoutes: Routes =[
    {
        path:'main',
        component: MainComponent
    },
    {
        path: 'loginUsu',
        component: LoginUsuComponent
    },
    {
        path: 'loginEmp',
        component: LoginEmpComponent
    },
    {
        path: 'mainUsu',
        component: MainUsuComponent
    },
    {
        path: 'mainEmp',
        component: MainEmpComponent
    },
    {
        path: 'perfilUsu',
        component: PerfilUsuComponent
    },
    {
        path: 'experencia',
        component: ExperenciaUsuComponent
    },
    {
        path: 'groupUsu',
        component: GroupUsuComponent
    },
    {
        path: 'evento',
        component: EventoEmpComponent
    },
    {
        path: 'perfilEmp',
        component: PerfilEmpComponent
    },
    {
        path: 'vagas',
        component: VagasEmpComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(mainRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class MainRoutingModule{}