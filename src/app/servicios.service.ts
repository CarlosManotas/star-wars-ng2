import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiciosService {

  constructor(private http: Http) { }

  private listaUrl = "https://swapi.co/api/people/";

  getList (){
    return this.http.get(this.listaUrl)
                  .map(res => res.json());
  }

  getNew (nuevaUrl:string){
    return this.http.get(this.listaUrl + nuevaUrl )
                .map(res => res.json());
  }

  getDetail (id: string | number){
    return this.http.get(this.listaUrl + id)
                .map(res => res.json());
  }

}
