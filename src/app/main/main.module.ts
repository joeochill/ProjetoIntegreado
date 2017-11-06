import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdlModule } from '@angular-mdl/core';

import { EventoEmpComponent } from './empresa/evento/eventoEmp.component'
import { ExperenciaUsuComponent } from './usuario/experiencia/experenciaUsu.component'
import { GroupUsuComponent } from './usuario/group/groupUsu.component'
import { LoginUsuComponent } from './usuario/login/loginUsu.component'
import { LoginEmpComponent } from './empresa/login/loginEmp.component'
import { MainComponent } from './main.component';
import { MainEmpComponent } from './empresa/main/mainEmp.component'
import { MainRoutingModule } from '../routing/main-routing.module'
import { MainUsuComponent } from './usuario/main/mainUsu.component'
import { PerfilEmpComponent } from './empresa/perfil/perfilEmp.component'
import { PerfilUsuComponent } from './usuario/perfil/perfilUsu.component'
import { VagasEmpComponent } from './empresa/vagas/vagasEmp.component'


@NgModule({
    imports:[
        CommonModule,
        MainRoutingModule,
        MdlModule
    ],
    declarations:[
        MainComponent,
        LoginUsuComponent,
        LoginEmpComponent,
        MainUsuComponent,
        MainEmpComponent,
        PerfilUsuComponent,
        ExperenciaUsuComponent,
        GroupUsuComponent,
        EventoEmpComponent,
        PerfilEmpComponent,
        VagasEmpComponent
    ],
    exports:[
        MainComponent,
        LoginUsuComponent,
        LoginEmpComponent,
        MainUsuComponent,
        MainEmpComponent,
        PerfilUsuComponent,
        ExperenciaUsuComponent,
        GroupUsuComponent,
        EventoEmpComponent,
        PerfilEmpComponent,
        VagasEmpComponent
    ]
})
export class MainModule{}