import { Routes } from '@angular/router';
import { LimpiezaRespaldosComponent } from './pages/limpieza-respaldos/limpieza-respaldos.component';
import { CableadoEstructuradoComponent } from './pages/cableado-estructurado/cableado-estructurado.component';
import { HomeComponent } from './pages/home/home.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { CircuitoCerradoComponent } from './pages/circuito-cerrado/circuito-cerrado.component';
import { ReparacionMovilComponent } from './pages/reparacion-movil/reparacion-movil.component';
import { DesarrolloSoftwareComponent } from './pages/desarrollo-software/desarrollo-software.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mantenimiento',
    component: MantenimientoComponent
  },
  {
    path: 'cableado-estructurado',
    component: CableadoEstructuradoComponent
  },
  {
    path: 'circuito-cerrado',
    component: CircuitoCerradoComponent
  },
  {
    path: 'limpieza-respaldos',
    component: LimpiezaRespaldosComponent
  },
  {
    path: 'reparacion-movil',
    component: ReparacionMovilComponent
  },
  {
    path: 'desarrollo-software',
    component: DesarrolloSoftwareComponent
  }
];
