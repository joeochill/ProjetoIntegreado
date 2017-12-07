import { Component, OnInit } from '@angular/core'

import { Observable } from "rxjs/Observable";
import { Evento } from '../../model/evento.model'
import { Vagas } from '../../model/vagas.model'
import { EmpresaService } from '../../service/empresa.service'

@Component({
    moduleId: module.id,
    selector: 'mainEmp',
    templateUrl: 'mainEmp.component.html',
    styleUrls: ['../../usuario/main/template/w3.css', '../../usuario/main/template/w3-theme-blue-grey.css', '../../usuario/main/template/font-awesome.min.css']
})
export class MainEmpComponent implements OnInit{

    vagas : Vagas[];
    evento: Evento[];
    // event: boolean = true;
    v: Vagas;
    e: Evento

    constructor(
        private empService: EmpresaService
    ){}

    ngOnInit():void{
        this.v = new Vagas('','','','','','','','')
        this.e = new Evento('','','','','','','')
        this.getAll();
        this.getAllEventos()
    }

    getOne(vaga: Vagas):void{
        this.v = vaga;
    }

    getOneEvent(evento: Evento): void{
        this.e = evento;
    }

    getAll() {
        // this.empService.getVagas()
        //     .then((vagas : Vagas[]) => {
        //         this.vagas = vagas;
        //     }).catch(err => console.log(err))
        this.empService.getVagas()
          .subscribe(
          data => {
              console.log(this.vagas);
              this.vagas = data;
          },
          error => alert("error"));
        //   error => console.log(err),
        //   () => console.log(this.vagas)
        //   );
      }

      getAllEventos() {
        this.empService.getEventos()
          .subscribe(
          data => {
              console.log(this.evento);
              this.evento = data;
          },
          error => alert("error"));
      }

      ondeleteVaga(va: Vagas){
        this.empService
        .deleteVaga(va).subscribe(
            data => {
                this.getAll();
                this.getAllEventos();
                return true;
            },
            error => {
                console.error("Error delting vaga");
                return Observable.throw(error);
            }
        );
        
      }

      ondeleteEvent(ev:Evento){
        this.empService
        .deleteEvento(ev).subscribe(
            data => {
                this.getAll();
                this.getAllEventos();
                return true;
            },
            error => {
                console.error("Error delting evento");
                return Observable.throw(error);
            }
        );
      }

}
