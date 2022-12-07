import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteService } from './docente.service';
import { AreaDisciplinarService } from './area-disciplinar.service';



@NgModule({
  providers: [DocenteService, AreaDisciplinarService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
