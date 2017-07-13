import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import {JustificantesService} from '../../services/justificantes.service';
import { Justificantes } from '../../models/justificantes';
import { HttpModule } from '@angular/http';
import { GLOBAL } from '../../services/global';
import 'rxjs/add/operator/map';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}



@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'justificantes.component.html',
    providers: [JustificantesService]
   

})

export class JustificantesComponent implements OnInit{

url : string;
 
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
 
  dtTrigger: Subject<any>;
  justificantes: Justificantes[] = [];

    public tableData1: TableData;
    public tableData2: TableData;

    constructor( private justificanteservice: JustificantesService){

    }
    getJustificantes2(){

// this.url = GLOBAL.url;
   // return "hola desde el servicio";

  // return this.http.get(this.url).map(res  => res.json());
}

    getJustificantes(){


this.justificanteservice.getJustificantes().subscribe(
result =>{
    this.justificantes = result;
    this.dtTrigger.next();
}, 
error =>{
    console.log(<any>error);
}
    
);


    }
    ngOnInit(){
 
 

this.getJustificantes();



   
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
    }
}
