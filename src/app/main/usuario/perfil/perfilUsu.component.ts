import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PerfilEmp } from '../../model/perfilEmp.model';
import { EmpresaService } from '../../service/empresa.service';

@Component({
    moduleId: module.id,
    selector: 'perfilUsu',
    templateUrl: 'perfilUsu.component.html',
    styleUrls: ['../main/template/w3.css', '../main/template/w3-theme-blue-grey.css', '../main/template/w3-theme-blue-grey.css', '../main/template/font-awesome.min.css']
})
export class PerfilUsuComponent{}