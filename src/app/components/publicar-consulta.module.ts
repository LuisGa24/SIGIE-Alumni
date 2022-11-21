import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarConsultaRoutingModule } from './publicar-consulta-routing.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { PublicarConsultaMejoraComponent } from './publicar-consulta-mejora/publicar-consulta-mejora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PublicarConsultaMejoraComponent
  ],
  imports: [
    CommonModule,
    PublicarConsultaRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicarConsultaModule { }
