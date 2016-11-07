import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-list',
  providers: [ServiciosService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  stars:any;
  jsonData:any;
  selectedPerson:any;
  constructor(private listaService: ServiciosService) { }

  ngOnInit() {
    this.listaService.getList()
                      .subscribe(star =>{
                        this.stars = star
                      })
  }

  next(nuevaUrl: string) {
       let id = nuevaUrl;
       var nuevoId = id.split('/');
       var finalId = nuevoId[nuevoId.length-1];
       this.listaService.getNew(finalId)
                         .subscribe(nuevoJson =>{
                           this.stars = nuevoJson
                           this.jsonData = ""
                         })
  }

  show(data){
    this.jsonData = data;
  }

  onSelect(one: any){
    this.selectedPerson = one;
  }
}
