import { Component } from '@angular/core';
import {JustificantesService} from '../../services/justificantes.service';
import { GLOBAL } from '../../services/global';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JustificantesService]
  
})

export class AppComponent{

salir:boolean = true;

onNotify(logout:boolean):void {
    this.salir = logout;
  }
Notify(logout:boolean):void {
    this.salir = logout;
  }
}
