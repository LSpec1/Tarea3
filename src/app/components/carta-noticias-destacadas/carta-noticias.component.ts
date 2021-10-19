import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/components/models/noticia.model';

@Component({
  selector: 'app-carta-noticias-destacadas',
  templateUrl: './carta-noticias.component.html',
  styleUrls: ['./carta-noticias.component.scss']
})
export class CartaNoticiasDestacadasComponent implements OnInit {

  gris:string = "gray";
  blanco:string = "white";
  verde:string = "success";
  azul:string = "primary";
  rojoDark:string = "rojodark";
  violeta:string = "violet";
  azulDark:string ="azuldark";
  rojo:string = "red"

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
