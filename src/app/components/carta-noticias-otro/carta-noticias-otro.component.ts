import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/components/models/noticia.model';

@Component({
  selector: 'app-carta-noticias-otro',
  templateUrl: './carta-noticias-otro.component.html',
  styleUrls: ['./carta-noticias-otro.component.scss']
})
export class CartaNoticiasOtroComponent implements OnInit {

  gris:string = "gray";
  blanco:string = "white";
  verde:string = "success";
  azul:string = "primary";
  rojo:string = "rojodark";

  @Input()
  news: Noticia;

  constructor() {
    this.news = 
      {
        id:0,
        url:'',
        titulo:'',
        categoria: '',
        fecha: '',
        autor: '',
        cuerpo:'',
        boton:''
      };
  }

  ngOnInit(): void {
  }

}
