import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'mainUsu',
    templateUrl: 'mainUsu.component.html',
    styleUrls: ['./template/w3.css', './template/w3-theme-blue-grey.css', './template/w3-theme-blue-grey.css', './template/font-awesome.min.css']
}) 
export class MainUsuComponent{
    fullImagePath: string;
    public myPicture:string = "avatar3.png";

    constructor() {
        this.fullImagePath = "template/avatar3.png";
      }
}