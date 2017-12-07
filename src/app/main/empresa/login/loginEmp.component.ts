import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioEmp } from '../../model/usuarioEmp.model'
import { PerfilEmp } from '../../model/perfilEmp.model';
import { EmpresaService } from '../../service/empresa.service';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'loginEmp',
    templateUrl: 'loginEmp.component.html',
    styleUrls:['../../usuario/login/style.css']
})
export class LoginEmpComponent implements OnInit{

    perfil: PerfilEmp;
    usu: UsuarioEmp;
    usuLogin: UsuarioEmp;
    getUsu: UsuarioEmp;

    constructor(
        private empService: EmpresaService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(){
        this.perfil = new PerfilEmp('','','','','','','','','','','','','');
        this.usu = new UsuarioEmp('','','');
        this.usuLogin = new UsuarioEmp('','','');
    }

    onsubmit(): void{

        let promise;
        let promiseUsu;
        this.usu.empresa = this.perfil.instituicao;
        promiseUsu = this.empService.createUsu(this.usu);
        promise = this.empService.create(this.perfil);

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
            if(this.usuLogin.contrasenha === this.getUsu.contrasenha){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

}