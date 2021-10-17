import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.scss']
})
export class ContactScreenComponent implements OnInit {

  formulario:FormGroup;
  opciones = ["Contenido","Publicidad","Sugerencias","Suscripciones digitales"];
  estado:boolean=false


  constructor(public FormB:FormBuilder) {
    this.formulario = this.FormB.group({
      nombre: ["", [Validators.required, Validators.pattern("[^0-9]+")]],
      telefono: ["", [Validators.required, Validators.pattern("(9)[0-9]{8}")]],
      correo: ["", [Validators.required, Validators.email]],
      opcion: ["", [Validators.required, Validators.pattern("[^0]+")]],
      mensaje: ["",[Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  validacion(){
    this.estado=true;
    let datos:any=[{
      "nombre": this.formulario.get("nombre")?.value,
      "telefono": this.formulario.get("telefono")?.value.toString(),
      "mail": this.formulario.get("correo")?.value,
      "opcion": this.formulario.get("opcion")?.value,
      'mensaje': this.formulario.get("mensaje")?.value
    }];

    console.log(datos[0]);

  }
}
