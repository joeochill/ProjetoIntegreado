import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PerfilEmp } from '../../model/perfilEmp.model';
import { EmpresaService } from '../../service/empresa.service';

@Component({
    moduleId: module.id,
    selector: 'perfilEmp',
    templateUrl: 'perfilEmp.component.html',
    styleUrls: ['../../usuario/main/template/w3.css', '../../usuario/main/template/w3-theme-blue-grey.css', '../../usuario/main/template/font-awesome.min.css']
})
export class PerfilEmpComponent{

    perfil: PerfilEmp;
    private isNew: boolean = true;

    constructor(
        private empService: EmpresaService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    onsubmit(): void{

        let promise;

        if(this.isNew){
            promise = this.empService.create(this.perfil);
        }else{

        }

        promise.then(perfil => this.location.back());

    }

}