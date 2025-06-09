import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; 
import { Router } from '@angular/router'
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
  animations: [
  trigger('menuAnimation', [
    state('open', style({
      transform: 'translateX(0)'
    })),
    state('closed', style({
      transform: 'translateX(-100%)'
    })),
    transition('open <=> closed', [
      animate('300ms ease-in-out')
    ])
  ])
]
})
export class AppComponent {
  constructor(
    private menu: MenuController,
    private router: Router,
    
  ) {}

  logout() {
    // Aquí iría la lógica de cierre de sesión
    // Por ahora solo navegamos al login
    this.router.navigate(['/log-in'], { replaceUrl: true });
    this.menu.close();
  }

  closeMenu() {
    this.menu.close();
  }
}