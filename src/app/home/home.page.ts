import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  email: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // Obtener el email desde la navegación (ajusta según tu lógica)
    this.email = history.state.email || '';
    console.log('Email recibido:', this.email);
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.fechaNacimiento = '';
  }

  async mostrarInfo() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre} <br> Apellido: ${this.apellido}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
