import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/components/models/noticia.model';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  public noticias: Noticia[];

  constructor() {
    let botonNoticia = 'Leer Más';
    this.noticias = [
      {
        id:1,
        url:'https://conocedores.com/wp-content/uploads/2019/10/finlandia-aurora-boreal-15102019in1.jpg',
        titulo:'El juego del Calamar se convierte en la serie más visitada de Netflix',
        cuerpo:'Fusce rhoncus augue risus, vitae ullamcorper sem faucibus at. Cras risus lacus, dictum sed imperdiet id, tempor ac ligula. Suspendisse suscipit, nunc eu maximus lobortis, eros sem vehicula enim, et rutrum velit eros in turpis. Donec ac quam urna.',
        boton: botonNoticia
      },
      {
        id:2,
        url:'https://p4.wallpaperbetter.com/wallpaper/209/814/423/bridges-george-washington-bridge-bridge-city-wallpaper-preview.jpg',
        titulo:'Murió el rinoceronte más viejo',
        cuerpo:'Duis ultrices fermentum mauris et tempor. Praesent vestibulum neque non semper mollis. Donec a eros justo. Ut sollicitudin interdum dapibus. Donec aliquet ut nisl eget facilisis. Donec augue ipsum, pulvinar ac placerat pharetra, varius nec ipsum. Aenean magna turpis, varius eu felis vel, maximus fermentum risus.',
        boton: botonNoticia
      },
      {
        id:3,
        url:'https://previews.123rf.com/images/sborisov/sborisov1008/sborisov100800018/7512184-ferrocarril-en-oto%C3%B1o-de-bosque-.jpg',
        titulo:'Ciclismo - El regreso de Chris Froome',
        cuerpo:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus. Nulla sapien urna, pulvinar vel sem vel, vehicula porta tellus. Curabitur ac fermentum ipsum, id cursus urna. Phasellus fringilla suscipit tincidunt. Suspendisse et tortor ut tellus ornare congue ac a risus.',
        boton: botonNoticia
      },
      {
        id:4,
        url:'https://i.pinimg.com/564x/f9/bc/94/f9bc941d08341b9c38b603bba4f4b2bf.jpg',
        titulo:'Noticia',
        cuerpo:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
        boton: botonNoticia
      },
      {
        id:5,
        url:'https://i.pinimg.com/564x/f9/bc/94/f9bc941d08341b9c38b603bba4f4b2bf.jpg',
        titulo:'Noticia',
        cuerpo:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
        boton: botonNoticia
      },
      {
        id:6,
        url:'https://i.pinimg.com/564x/f9/bc/94/f9bc941d08341b9c38b603bba4f4b2bf.jpg',
        titulo:'Noticia',
        cuerpo:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
        boton: botonNoticia
      },
      {
        id:7,
        url:'https://i.pinimg.com/564x/f9/bc/94/f9bc941d08341b9c38b603bba4f4b2bf.jpg',
        titulo:'Noticia',
        cuerpo:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
        boton: botonNoticia
      },
      {
        id:8,
        url:'https://i.pinimg.com/564x/f9/bc/94/f9bc941d08341b9c38b603bba4f4b2bf.jpg',
        titulo:'Noticia',
        cuerpo:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
        boton: botonNoticia
      }
    ];
  }

  ngOnInit(): void {
  }

}
