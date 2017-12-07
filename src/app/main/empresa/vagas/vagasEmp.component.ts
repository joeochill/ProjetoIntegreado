import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Vagas } from '../../model/vagas.model'
import { EmpresaService } from '../../service/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'vagas',
    templateUrl: 'vagasEmp.component.html',
    styleUrls: ['../../usuario/main/template/w3.css', '../../usuario/main/template/w3-theme-blue-grey.css', '../../usuario/main/template/font-awesome.min.css']
})
export class VagasEmpComponent implements OnInit{

    vaga: Vagas;

    constructor(
        private empService: EmpresaService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(){
        this.vaga = new Vagas('','','','','','','','')
    }

    onsubmit(){
        let promise;
        promise = this.empService.createVaga(this.vaga);
    }
}