import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {
  foros: any[] = [
    {
      "usuario": "Daniel C",
      "contenido": "Prueba de foros universitarios (comentario). Este es el comentario número 1...",
      "fecha_registro": "01/01/2001",
      "calificacion" : 100
    },
    {
      "usuario": "Daniel C",
      "contenido": "Prueba de foros universitarios (comentario). Este es el comentario número 2...",
      "fecha_registro": "02/01/2001",
      "calificacion" : 101
    },
    {
      "usuario": "Daniel C",
      "contenido": "Prueba de foros universitarios (comentario). Este es el comentario número 3...",
      "fecha_registro": "03/01/2001",
      "calificacion" : 97
    },
    {
      "usuario": "Daniel C",
      "contenido": "Prueba de foros universitarios (comentario). Este es el comentario número 4...",
      "fecha_registro": "04/01/2001",
      "calificacion" : 30
    },
    {
      "usuario": "Daniel C",
      "contenido": "Prueba de foros universitarios (comentario). Este es el comentario número 5...",
      "fecha_registro": "05/01/2001",
      "calificacion" : 25
    },
    {
      "usuario": "Daniel C",
      "contenido": "Prueba de foros universitarios (comentario). Este es el comentario número 6...",
      "fecha_registro": "06/01/2001",
      "calificacion" : 67
    },
    {
      "usuario": "Daniel C",
      "contenido": "Prueba de foros universitarios (comentario). Este es el comentario número 7...",
      "fecha_registro": "07/01/2001",
      "calificacion" : 81
    }
  ]
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['comunidad'],this.route.snapshot.params['foro'])
   }

  ngOnInit(): void {
  }

  
}
