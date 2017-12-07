import { Component, OnInit } from '@angular/core';

import { Vagas } from '../../model/vagas.model';
import { EmpresaService } from '../../service/empresa.service';

@Component({
    moduleId: module.id,
    selector: 'mainUsu',
    templateUrl: 'mainUsu.component.html',
    styleUrls: ['./template/w3.css', './template/w3-theme-blue-grey.css', './template/w3-theme-blue-grey.css', './template/font-awesome.min.css']
}) 
export class MainUsuComponent{

    vagas : Vagas[];

    fullImagePath: string;
    public myPicture:string = "avatar3.png";

    constructor(
        private empService: EmpresaService
    ) {
        this.fullImagePath = "template/avatar3.png";
      }

      ngOnInit():void{
        this.getAll();
    }

    getAll(): void {
        this.empService.getVagas()
          .subscribe(
          data => {
              console.log(this.vagas);
              this.vagas = data;
          },
          error => alert("error"));
      }
}