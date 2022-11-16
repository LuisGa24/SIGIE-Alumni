import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDocentesComponent } from './listar-docentes/listar-docentes.component';

const routes: Routes = [
  {
    path: "listarDocentes",
    component: ListarDocentesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
