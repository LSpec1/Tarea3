import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Noticia } from 'src/app/components/models/noticia.model';

@Component({
  selector: 'app-carta-noticias-otro',
  templateUrl: './carta-noticias-otro.component.html',
  styleUrls: ['./carta-noticias-otro.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class CartaNoticiasOtroComponent implements OnInit {

  gris:string = "gray";
  blanco:string = "white";

  @Input()
  news: Noticia;

  constructor(private modalService: NgbModal) {
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

  openLg(content:any) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent:any) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
