import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicarConsultaMejoraComponent } from './publicar-consulta-mejora/publicar-consulta-mejora.component'

const routes: Routes = [
  {
    path: "consultaMejora",
    component: PublicarConsultaMejoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarConsultaRoutingModule { }
