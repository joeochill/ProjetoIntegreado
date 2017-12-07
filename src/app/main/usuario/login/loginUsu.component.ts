import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioEmp } from '../../model/usuarioEmp.model'
import { EmpresaService } from '../../service/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'loginUsu',
    templateUrl: 'loginUsu.component.html',
    styleUrls:['./style.css']
})
export class LoginUsuComponent{

    usuLogin: UsuarioEmp;
    getUsu: UsuarioEmp;

    constructor(
        private empService: EmpresaService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(){
        this.usuLogin = new UsuarioEmp('','','');
    }

    getUSu(): void{
        this.empService.getUsuario(this.usuLogin.usuario)
            .subscribe(
                data => {
                    console.log(this.getUsu);
                    this.getUsu = data;
                },
                error => alert("error")
            );
    }

    login(): boolean{
        
        if(this.getUsu != null ){
            return true;
        }else{
            return false;
        }
    }

}