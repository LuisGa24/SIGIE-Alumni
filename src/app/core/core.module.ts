import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigieAlumniHeaderComponent } from './sigie-alumni-header/sigie-alumni-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigieAlumniNavbarComponent } from './sigie-alumni-navbar/sigie-alumni-navbar.component'
import { AppMaterialModule } from '../app-material/app-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { DocenteRoutingModule } from '../docente/docente-routing.module';
import { PublicarConsultaRoutingModule } from '../components/publicar-consulta-routing.module'



@NgModule({
  declarations: [
    SigieAlumniHeaderComponent,
    SigieAlumniNavbarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    AppRoutingModule,
    DocenteRoutingModule,
    PublicarConsultaRoutingModule
  ],
  exports: [
    SigieAlumniHeaderComponent,
    SigieAlumniNavbarComponent
  ]
})
export class CoreModule { }
