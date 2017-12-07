import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Evento } from '../../model/evento.model';
import { EmpresaService } from '../../service/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'evento',
    templateUrl: 'eventoEmp.component.html',
    styleUrls: ['../../usuario/main/template/w3.css', '../../usuario/main/template/w3-theme-blue-grey.css', '../../usuario/main/template/font-awesome.min.css']
})
export class EventoEmpComponent implements OnInit{

    evento : Evento;

    constructor(
        private empService: EmpresaService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(){
        this.evento = new Evento('','','','','','','')
    }

    onsubmit(){
        let promise;
        promise = this.empService.createEvento(this.evento);
    }
}