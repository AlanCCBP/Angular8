import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  busqueda;
  constructor(public router:Router) { }
  buscar(){
    this.router.navigate(['/heroes/'+this.busqueda]);
    //console.log(this.busqueda);
  }
  ngOnInit() {
  }

}
