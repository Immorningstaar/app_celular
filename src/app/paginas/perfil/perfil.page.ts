import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
   host: { 'class': 'page-background' },
})
export class PerfilPage {
  historial = [
    {
      nombre: 'Completos Don Lucho',
      fecha: '01/06/2025',
      imagen: 'assets/don-lucho.jpg',
      puntaje: 4.5
    },
    {
      nombre: 'El Rey del Completo',
      fecha: '03/06/2025',
      imagen: 'assets/rey-completo.jpg',
      puntaje: 4.8
    },
    {
      nombre: 'Completo Express',
      fecha: '06/06/2025',
      imagen: 'assets/completo-express.jpg',
      puntaje: 4.2
    }
  ];
}