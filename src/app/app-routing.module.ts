import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


/*apuntes mios, se agrega despues del "./" el nombre de la carpeta para tener la ruta
loadchildren sirve para que no cargar todos los componentes al arrancar la app, y
Angular solo los carga cuando el usuario accede a esa ruta. */
const routes: Routes = [
  {
    path: 'log-in',
    loadChildren: () => import('./paginas/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
