import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/domain/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.component.html',
  styleUrls: ['./listar-docentes.component.css']
})
export class ListarDocentesComponent implements OnInit {

  docentes: Array<Docente>;
  constructor(private docenteService: DocenteService) {
    this.docentes = this.docenteService.getDocentes();
  }

  ngOnInit(): void {
  }

}
