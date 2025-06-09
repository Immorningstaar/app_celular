import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  host: {'class': 'page-background'},
  standalone: false,
})
export class HomePage {
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: string = '';

constructor(
  private router: Router,
  private alertController: AlertController
) {
  const nav = this.router.getCurrentNavigation();
  this.email = nav?.extras?.state?.['email'] || 'Invitado';
}


  ngOnInit() {
    // Obtener el email desde la navegación (ajusta según tu lógica)
    this.email = localStorage.getItem('email') || 'Invitado';
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.fechaNacimiento = '';
  }

async mostrarInfo() {
  const alert = await this.alertController.create({
    header: 'Usuario',
    message: `Su nombre es: ${this.nombre} ${this.apellido}`,
    buttons: ['Yes']
  });
  await alert.present();
}
}
