import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteService } from './docente.service';



@NgModule({
  providers: [DocenteService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
