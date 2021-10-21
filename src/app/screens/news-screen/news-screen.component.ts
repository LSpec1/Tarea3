import { Component, OnInit } from '@angular/core';
import { listaNoticias } from 'src/app/components/models/noticia.model';



@Component({
  selector: 'app-news-screen',
  templateUrl: './news-screen.component.html',
  styleUrls: ['./news-screen.component.scss']
})
export class NewsScreenComponent implements OnInit {

  listaNoticias = listaNoticias;
  constructor() { }

  ngOnInit(): void {
  }

}
