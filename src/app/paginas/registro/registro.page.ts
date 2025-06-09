import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  //Variables para almacenar datos del formulario.
  nombre: any = '';
  apellido: any = '';
  selectedOption: any = ''; // nivel de completero
  selectedDate: any = '';
  usuario: any = '';
  password: any = '';

  constructor(private alertController: AlertController, 
              private menu: MenuController) { }

  ngOnInit() {
    this.menu.close("mainMenu");
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  guardar() { 
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacíos');
    } else {
      this.presentAlert('Datos Correctos  usuario: ' + this.nombre + ' fecha nacimiento: ' + this.selectedDate);
    }
  }
}