import { Component, OnInit } from '@angular/core';
import { listaNoticias, Noticia } from '../models/noticia.model';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {

  ListaNoticias=listaNoticias;
  id:number=0;
  Noticia:any;


  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
      console.log(this.id)
    })
  }

  ngOnInit(): void {
    this.Noticia = this.ListaNoticias.find(objeto=>objeto.id==this.id);
  }

}
