import { Injectable } from '@angular/core'
import { Http, Headers, Response, RequestOptions } from '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import "rxjs/Rx";

import { UsuarioEmp } from '../model/usuarioEmp.model'
import { Evento } from '../model/evento.model'
import { PerfilEmp } from '../model/perfilEmp.model'
import { Vagas } from '../model/vagas.model'
@Injectable()
export class EmpresaService{

    private empresaUrl: string ='http://localhost:8060/empresa';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http: Http
    ){}

    getVagas(){
        const url = `${this.empresaUrl}/vaga/find`;
        // return this.http.get(url)
        //     .toPromise()
        //     .then(response => response.json().data as Vagas[]);
        return this.http.get(url)
            .map(res => <Vagas[]> res.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            })
            
            
    }

    getUsuario(usu: string){
        const url = `${this.empresaUrl}/findUsu/${usu}`;
        return this.http.get(url)
        .map(res => <UsuarioEmp[]> res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        })
    }

    getEventos(){
        const url = `${this.empresaUrl}/evento/find`;
        return this.http.get(url)
            .map(res => <Evento[]> res.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            })
            
            
    }

    create(perfil: PerfilEmp): Promise<PerfilEmp>{
        const url = `${this.empresaUrl}/perfil/insert`;
        return this.http.post(url, JSON.stringify(perfil), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                console.log(response.json().data)
                return response.json().data as PerfilEmp;
            })
            .catch(this.handleError);
    }

    createUsu(usu: UsuarioEmp): Promise<UsuarioEmp>{
        const url = `${this.empresaUrl}/insert/usu`;
        return this.http.post(url,  JSON.stringify(usu), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                console.log(response.json().data)
                return response.json().data as UsuarioEmp;
            })
            .catch(this.handleError);
    }

    createVaga(vaga: Vagas): Promise<Vagas>{
        const url = `${this.empresaUrl}/vaga/insert`;
        return this.http.post(url, JSON.stringify(vaga), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                console.log(response.json().data)
                return response.json().data as Vagas;
            })
            .catch(this.handleError);
    }

    createEvento(evento: Evento): Promise<Evento>{
        const url = `${this.empresaUrl}/evento/insert`;
        return this.http.post(url, JSON.stringify(evento), {headers: this.headers})
        .toPromise()
        .then((response: Response) => {
            console.log(response.json().data)
            return response.json().data as Evento;
        })
        .catch(this.handleError);
    }

    private handleError(err: any): Promise<any>{
        return Promise.reject(err.message || err);
    }

    deleteVaga(vaga:Vagas){
        const url = `${this.empresaUrl}/delete/vaga/${vaga.id}`;
        return this.http.delete(url, {headers: this.headers})
        .map((resp:Response)=>resp.json())
        .catch((error:any) =>{return Observable.throw(error);}); 
    }

    deleteEvento(evento:Evento){
        const url = `${this.empresaUrl}/delete/evento/${evento.id}`;
        return this.http.delete(url, {headers: this.headers})
        .map((resp:Response)=>resp.json())
        .catch((error:any) =>{return Observable.throw(error);});
    }

}