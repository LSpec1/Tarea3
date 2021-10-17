import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  links = [
    { title: 'Inicio', fragment: 'home'},
    { title: 'Noticias', fragment: 'news'},
    { title: 'Servicio Al Cliente', fragment: 'contact'}
  ]
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {


  }

}
