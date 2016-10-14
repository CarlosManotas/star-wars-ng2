import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service'

@Component({
  selector: 'app-list',
  providers: [ServiciosService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  stars:any;
  jsonData:any;
  constructor(private listaService: ServiciosService) { }

  ngOnInit() {
    this.listaService.getList()
                      .subscribe(star =>{
                        this.stars = star
                      })
  }
  next(nuevaUrl: string) {
    this.listaService.getNew(nuevaUrl)
                      .subscribe(nuevoJson =>{
                        this.stars = nuevoJson
                        this.jsonData = ""
                      })

  }
  show(data){
    this.jsonData = data;
  }

}
