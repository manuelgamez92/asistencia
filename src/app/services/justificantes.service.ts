import { Injectable } from '@angular/core';
import  { Http,Response,Headers,RequestOptions } from '@angular/http';
import { GLOBAL } from './global';
import { Justificantes } from '../models/justificantes';
import {Observable} from "rxjs";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JustificantesService{
  

  private headers = new Headers({ 'Content-Type': 'application/json' });
  public url: string;
  
  public tipodebusqueda: string;
  public infodebusqueda: string;
  public busquedaAvanzada: string;
public palabra: string;
public personita = new Justificantes (1,"","","","","","","","");
constructor(

public _http: Http

){
  

this.url = GLOBAL.url;


}


getJustificantes(){

this.url = GLOBAL.url;
   // return "hola desde el servicio";

   return this._http.get(this.url).map(res  => res.json());
}



getPersonasRFC(palabrita: string){

this.url = GLOBAL.url+this.tipodebusqueda;
   // return "hola desde el servicio";

   return this._http.get(this.url+palabrita).map(res  => res.json());
}





getPersonas(){

this.url = GLOBAL.url+"todos";
   // return "hola desde el servicio";

   return this._http.get(this.url).map(res  => res.json());
}

getPersona(id){

this.url = GLOBAL.url;
   // return "hola desde el servicio";

   return this._http.get(this.url+"personas/"+id).map(res  => res.json());
}

updatePersona(id,nombre: string,apaterno: string,amaterno: string,rfc: string, npuesto: string, area1: string, area2: string, 
area3: string, area4: string, area5: string, area6: string,  nads: string, tiponombra:string,nfuncion:string) {
  this.url = GLOBAL.url;
  let data = JSON.stringify({
    "nombre": nombre,
    "rfc": rfc,
    "apaterno": apaterno,
    "amaterno": amaterno,
    "npuesto": npuesto,
    "area1" : area1,
    "area2" : area2,
    "area3" : area3,
    "area4" : area4,
    "area5" : area5,
    "area6" : area6,
    "nads" : nads,
    "tiponombra":tiponombra,
    "nfuncion": nfuncion
  });

  let headers  = new Headers({'Content-Type':'application/json'});
  return this._http.put(this.url+'editar-perplantilla/'+id,data,{headers: headers})
  .map(res => res.json());

}

postPersona(nombre: string,apaterno: string,amaterno: string,rfc: string) {
  this.url = GLOBAL.url;
  let data = JSON.stringify({
    "nombre": nombre,
    "rfc": rfc,
    "apaterno": apaterno,
    "amaterno": amaterno
  
  });

  let headers  = new Headers({'Content-Type':'application/json'});
  return this._http.post(this.url+'post-perplantilla/', data,{headers: headers})
  .map(res => res.json());

  }

updatePersona2(id,nombre: string,apaterno: string,amaterno: string,rfc: string,npuesto: string) {
  this.url = GLOBAL.url;
  let data = JSON.stringify({
    "nombre": nombre,
    "rfc": rfc,
    "apaterno": apaterno,
    "amaterno": amaterno,
    "npuesto": npuesto

  });

  let headers  = new Headers({'Content-Type':'application/json'});
  return this._http.put(this.url+'editar-datperson/'+id,data,{headers: headers})
  .map(res => res.json());

  

  }

getPersonasAvanzadas(palabrita: string){

this.url = GLOBAL.url+this.busquedaAvanzada;
   // return "hola desde el servicio";

   return this._http.get(this.url+palabrita).map(res  => res.json());
}



search(text: string): Observable<any> {

  
    this.url = GLOBAL.url+"buscararea/";
    return this._http.get(this.url+text).map(res  => res.json()).catch(err => {

      return Observable.throw(err);
    });


  }




}










