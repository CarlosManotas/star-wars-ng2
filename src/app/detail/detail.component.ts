import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiciosService } from '../servicios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  person:any;



  constructor(private location:Location, private route: ActivatedRoute,
              private router: Router,
              private listaService: ServiciosService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = params['id'];
       this.listaService.getDetail(id)
                          .subscribe(nuevaData =>{
                            this.person = nuevaData
                          })
     });
  }
  goBack() {
    this.router.navigate(['']);
  }

  next() {
       let id = window.location.pathname;
       var nuevoId = id.split('/');
       var finalId = Number(nuevoId[nuevoId.length-1]) + 1;
       if (finalId >= 89){
         this.router.navigate(['/people', 1]);
       }else if(finalId === 17){
         this.router.navigate(['/people', 18]);
       }else{
         this.router.navigate(['/people', finalId]);
       }
  }
  previous() {
       let id = window.location.pathname;
       var nuevoId = id.split('/');
       var finalId = Number(nuevoId[nuevoId.length-1]) - 1;
       if (finalId <= 1){
         this.router.navigate(['/people', 88]);
       }else if(finalId === 17){
         this.router.navigate(['/people', 16]);
       }else{
         this.router.navigate(['/people', finalId]);
       }
  }
}
