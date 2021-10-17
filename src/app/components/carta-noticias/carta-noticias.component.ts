import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from 'src/app/components/models/noticia.model';

@Component({
  selector: 'app-carta-noticias',
  templateUrl: './carta-noticias.component.html',
  styleUrls: ['./carta-noticias.component.scss']
})
export class CartaNoticiasComponent implements OnInit {

  @Input()
  news: Noticia;

  constructor() {
    this.news = 
      {
        id:0,
        url:'',
        titulo:'',
        cuerpo:'',
        boton:''
      };
  }

  ngOnInit(): void {
  }

}
