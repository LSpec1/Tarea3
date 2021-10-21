export interface Noticia {
    id: number;
    url: string;
    categoria: string;
    fecha: string;
    autor: string;
    titulo: string;
    cuerpoCarta: string;
    cuerpoTotal: string;
    boton: string;
}

export let listaNoticias:Array<Noticia> = [{
    id:1,
    url:'https://conocedores.com/wp-content/uploads/2019/10/finlandia-aurora-boreal-15102019in1.jpg',
    categoria: 'Entretenimiento',
    fecha: '21/12/21',
    autor: 'Fusce rhoncus',
    titulo:'El juego del Calamar se convierte en la serie más visitada de Netflix',
    cuerpoCarta:'Fusce rhoncus augue risus, vitae ullamcorper sem faucibus at. Cras risus lacus, dictum sed imperdiet id, tempor ac ligula. Suspendisse suscipit, nunc eu maximus lobortis, eros sem vehicula enim, et rutrum velit eros in turpis. Donec ac quam urna.',
    cuerpoTotal:'Quisque viverra nisi ac enim tempor egestas. Nam sed viverra nisl. Integer nulla odio, sollicitudin dapibus ipsum sed, condimentum lobortis arcu. Curabitur quis convallis ex. Sed at odio viverra, porta quam ac, semper enim. Pellentesque hendrerit est non libero tincidunt, nec molestie ligula tempus. Donec euismod faucibus mauris vel sollicitudin. Vestibulum non est finibus, aliquet elit vel, dictum nibh. Vivamus in turpis quis turpis feugiat sagittis ac id leo. Etiam imperdiet tortor sit amet ipsum facilisis, ullamcorper sagittis orci faucibus. Morbi id rhoncus lacus, eget ultricies ligula. Sed vestibulum convallis mauris, in pulvinar massa lacinia quis. Nunc porttitor at mauris sit amet scelerisque. In ut eros posuere, fringilla eros a, molestie sapien. Curabitur ornare turpis at dui congue, eu euismod erat condimentum. Aliquam enim sem, lobortis a metus non, molestie commodo arcu. Nulla consequat varius ante, malesuada pharetra mauris blandit ut. Vestibulum mattis ornare metus, at venenatis purus ornare ut. Vestibulum orci ipsum, tristique rhoncus hendrerit vel, facilisis vitae metus. Etiam in pellentesque enim, vitae lobortis arcu. Duis eu ex vehicula, ullamcorper erat in, pretium metus.',
    boton: 'botonNoticia'
  },
  {
    id:2,
    url:'https://p4.wallpaperbetter.com/wallpaper/209/814/423/bridges-george-washington-bridge-bridge-city-wallpaper-preview.jpg',
    categoria: 'Mundo',
    fecha: '21/12/21',
    autor: 'Fusce rhoncus',
    titulo:'Murió el rinoceronte más viejo',
    cuerpoCarta:'Duis ultrices fermentum mauris et tempor. Praesent vestibulum neque non semper mollis. Donec a eros justo. Ut sollicitudin interdum dapibus. Donec aliquet ut nisl eget facilisis. Donec augue ipsum, pulvinar ac placerat pharetra, varius nec ipsum. Aenean magna turpis, varius eu felis vel, maximus fermentum risus.',
    cuerpoTotal:'Quisque viverra nisi ac enim tempor egestas. Nam sed viverra nisl. Integer nulla odio, sollicitudin dapibus ipsum sed, condimentum lobortis arcu. Curabitur quis convallis ex. Sed at odio viverra, porta quam ac, semper enim. Pellentesque hendrerit est non libero tincidunt, nec molestie ligula tempus. Donec euismod faucibus mauris vel sollicitudin. Vestibulum non est finibus, aliquet elit vel, dictum nibh. Vivamus in turpis quis turpis feugiat sagittis ac id leo. Etiam imperdiet tortor sit amet ipsum facilisis, ullamcorper sagittis orci faucibus. Morbi id rhoncus lacus, eget ultricies ligula. Sed vestibulum convallis mauris, in pulvinar massa lacinia quis. Nunc porttitor at mauris sit amet scelerisque. In ut eros posuere, fringilla eros a, molestie sapien. Curabitur ornare turpis at dui congue, eu euismod erat condimentum. Aliquam enim sem, lobortis a metus non, molestie commodo arcu. Nulla consequat varius ante, malesuada pharetra mauris blandit ut. Vestibulum mattis ornare metus, at venenatis purus ornare ut. Vestibulum orci ipsum, tristique rhoncus hendrerit vel, facilisis vitae metus. Etiam in pellentesque enim, vitae lobortis arcu. Duis eu ex vehicula, ullamcorper erat in, pretium metus.',
    boton: 'botonNoticia'
  },
  {
    id:3,
    url:'https://previews.123rf.com/images/sborisov/sborisov1008/sborisov100800018/7512184-ferrocarril-en-oto%C3%B1o-de-bosque-.jpg',
    categoria: 'Deportes',
    fecha: '21/12/21',
    autor: 'Fusce rhoncus',
    titulo:'Ciclismo - El regreso de Chris Froome',
    cuerpoCarta:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus. Nulla sapien urna, pulvinar vel sem vel, vehicula porta tellus. Curabitur ac fermentum ipsum, id cursus urna. Phasellus fringilla suscipit tincidunt. Suspendisse et tortor ut tellus ornare congue ac a risus.',
    cuerpoTotal:'Quisque viverra nisi ac enim tempor egestas. Nam sed viverra nisl. Integer nulla odio, sollicitudin dapibus ipsum sed, condimentum lobortis arcu. Curabitur quis convallis ex. Sed at odio viverra, porta quam ac, semper enim. Pellentesque hendrerit est non libero tincidunt, nec molestie ligula tempus. Donec euismod faucibus mauris vel sollicitudin. Vestibulum non est finibus, aliquet elit vel, dictum nibh. Vivamus in turpis quis turpis feugiat sagittis ac id leo. Etiam imperdiet tortor sit amet ipsum facilisis, ullamcorper sagittis orci faucibus. Morbi id rhoncus lacus, eget ultricies ligula. Sed vestibulum convallis mauris, in pulvinar massa lacinia quis. Nunc porttitor at mauris sit amet scelerisque. In ut eros posuere, fringilla eros a, molestie sapien. Curabitur ornare turpis at dui congue, eu euismod erat condimentum. Aliquam enim sem, lobortis a metus non, molestie commodo arcu. Nulla consequat varius ante, malesuada pharetra mauris blandit ut. Vestibulum mattis ornare metus, at venenatis purus ornare ut. Vestibulum orci ipsum, tristique rhoncus hendrerit vel, facilisis vitae metus. Etiam in pellentesque enim, vitae lobortis arcu. Duis eu ex vehicula, ullamcorper erat in, pretium metus.',
    boton: 'botonNoticia'
  },
  {
    id:4,
    url:'https://i.pinimg.com/564x/f9/bc/94/f9bc941d08341b9c38b603bba4f4b2bf.jpg',
    categoria: 'Otro',
    fecha: '21/12/21',
    autor: 'Fusce rhoncus',
    titulo:'Noticia',
    cuerpoCarta:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
    cuerpoTotal:'Quisque viverra nisi ac enim tempor egestas. Nam sed viverra nisl. Integer nulla odio, sollicitudin dapibus ipsum sed, condimentum lobortis arcu. Curabitur quis convallis ex. Sed at odio viverra, porta quam ac, semper enim. Pellentesque hendrerit est non libero tincidunt, nec molestie ligula tempus. Donec euismod faucibus mauris vel sollicitudin. Vestibulum non est finibus, aliquet elit vel, dictum nibh. Vivamus in turpis quis turpis feugiat sagittis ac id leo. Etiam imperdiet tortor sit amet ipsum facilisis, ullamcorper sagittis orci faucibus. Morbi id rhoncus lacus, eget ultricies ligula. Sed vestibulum convallis mauris, in pulvinar massa lacinia quis. Nunc porttitor at mauris sit amet scelerisque. In ut eros posuere, fringilla eros a, molestie sapien. Curabitur ornare turpis at dui congue, eu euismod erat condimentum. Aliquam enim sem, lobortis a metus non, molestie commodo arcu. Nulla consequat varius ante, malesuada pharetra mauris blandit ut. Vestibulum mattis ornare metus, at venenatis purus ornare ut. Vestibulum orci ipsum, tristique rhoncus hendrerit vel, facilisis vitae metus. Etiam in pellentesque enim, vitae lobortis arcu. Duis eu ex vehicula, ullamcorper erat in, pretium metus.',
    boton: 'botonNoticia'
  },
  {
    id:5,
    url:'https://www.xtrafondos.com/wallpapers/resized/montanas-nevadas-con-bosque-3302.jpg?s=large',
    categoria: 'Mundo',
    fecha: '21/12/21',
    autor: 'Fusce rhoncus',
    titulo:'Noticia',
    cuerpoCarta:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
    cuerpoTotal:'Quisque viverra nisi ac enim tempor egestas. Nam sed viverra nisl. Integer nulla odio, sollicitudin dapibus ipsum sed, condimentum lobortis arcu. Curabitur quis convallis ex. Sed at odio viverra, porta quam ac, semper enim. Pellentesque hendrerit est non libero tincidunt, nec molestie ligula tempus. Donec euismod faucibus mauris vel sollicitudin. Vestibulum non est finibus, aliquet elit vel, dictum nibh. Vivamus in turpis quis turpis feugiat sagittis ac id leo. Etiam imperdiet tortor sit amet ipsum facilisis, ullamcorper sagittis orci faucibus. Morbi id rhoncus lacus, eget ultricies ligula. Sed vestibulum convallis mauris, in pulvinar massa lacinia quis. Nunc porttitor at mauris sit amet scelerisque. In ut eros posuere, fringilla eros a, molestie sapien. Curabitur ornare turpis at dui congue, eu euismod erat condimentum. Aliquam enim sem, lobortis a metus non, molestie commodo arcu. Nulla consequat varius ante, malesuada pharetra mauris blandit ut. Vestibulum mattis ornare metus, at venenatis purus ornare ut. Vestibulum orci ipsum, tristique rhoncus hendrerit vel, facilisis vitae metus. Etiam in pellentesque enim, vitae lobortis arcu. Duis eu ex vehicula, ullamcorper erat in, pretium metus.',
    boton: 'botonNoticia'
  },
  {
    id:6,
    url:'https://p4.wallpaperbetter.com/wallpaper/757/955/726/sky-meets-the-ocean-at-sunset-orange-sunset-sky-wallpaper-preview.jpg',
    categoria: 'Mundo',
    fecha: '21/12/21',
    autor: 'Fusce rhoncus',
    titulo:'Noticia',
    cuerpoCarta:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
    cuerpoTotal:'Quisque viverra nisi ac enim tempor egestas. Nam sed viverra nisl. Integer nulla odio, sollicitudin dapibus ipsum sed, condimentum lobortis arcu. Curabitur quis convallis ex. Sed at odio viverra, porta quam ac, semper enim. Pellentesque hendrerit est non libero tincidunt, nec molestie ligula tempus. Donec euismod faucibus mauris vel sollicitudin. Vestibulum non est finibus, aliquet elit vel, dictum nibh. Vivamus in turpis quis turpis feugiat sagittis ac id leo. Etiam imperdiet tortor sit amet ipsum facilisis, ullamcorper sagittis orci faucibus. Morbi id rhoncus lacus, eget ultricies ligula. Sed vestibulum convallis mauris, in pulvinar massa lacinia quis. Nunc porttitor at mauris sit amet scelerisque. In ut eros posuere, fringilla eros a, molestie sapien. Curabitur ornare turpis at dui congue, eu euismod erat condimentum. Aliquam enim sem, lobortis a metus non, molestie commodo arcu. Nulla consequat varius ante, malesuada pharetra mauris blandit ut. Vestibulum mattis ornare metus, at venenatis purus ornare ut. Vestibulum orci ipsum, tristique rhoncus hendrerit vel, facilisis vitae metus.',
    boton: 'botonNoticia'
  },
  {
    id:7,
    url:'https://imagenes.milenio.com/oyzDEQJ3tSPA84NzpPxr_chUx00=/958x596/https://www.milenio.com/uploads/media/2019/09/18/arce-el-arbol-de-las_11_0_478_297.jpg',
    categoria: 'Mundo',
    fecha: '21/12/21',
    autor: 'Fusce rhoncus',
    titulo:'Noticia',
    cuerpoCarta:'Aliquam tincidunt viverra lacinia. Nullam eu ante a mauris varius mattis ornare at tellus.',
    cuerpoTotal:'Quisque viverra nisi ac enim tempor egestas. Nam sed viverra nisl. Integer nulla odio, sollicitudin dapibus ipsum sed, condimentum lobortis arcu. Curabitur quis convallis ex. Sed at odio viverra, porta quam ac, semper enim. Pellentesque hendrerit est non libero tincidunt, nec molestie ligula tempus. Donec euismod faucibus mauris vel sollicitudin. Vestibulum non est finibus, aliquet elit vel, dictum nibh. Vivamus in turpis quis turpis feugiat sagittis ac id leo. Etiam imperdiet tortor sit amet ipsum facilisis, ullamcorper sagittis orci faucibus. Morbi id rhoncus lacus, eget ultricies ligula. Sed vestibulum convallis mauris, in pulvinar massa lacinia quis. Nunc porttitor at mauris sit amet scelerisque. In ut eros posuere, fringilla eros a, molestie sapien. Curabitur ornare turpis at dui congue, eu euismod erat condimentum. Aliquam enim sem, lobortis a metus non, molestie commodo arcu. Nulla consequat varius ante, malesuada pharetra mauris blandit ut. Vestibulum mattis ornare metus, at venenatis purus ornare ut. Vestibulum orci ipsum, tristique rhoncus hendrerit vel, facilisis vitae metus. Etiam in pellentesque enim, vitae lobortis arcu. Duis eu ex vehicula, ullamcorper erat in, pretium metus.',
    boton: 'botonNoticia'
  }];
