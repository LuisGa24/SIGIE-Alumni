import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { ListarDocentesComponent } from './listar-docentes/listar-docentes.component';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [
    ListarDocentesComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    AppMaterialModule
  ]
})
export class DocenteModule { }
