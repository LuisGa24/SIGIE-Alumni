import { Component, OnInit } from '@angular/core';
import { AreaDisciplinarService } from 'src/app/services/area-disciplinar.service';
import { CategoriaConsultaService } from 'src/app/services/categoria-consulta.service'
import { PlanEstudioService } from 'src/app/services/plan-estudio.service'
import { RecintoService } from 'src/app/services/recinto.service'



@Component({
  selector: 'app-publicar-consulta-mejora',
  templateUrl: './publicar-consulta-mejora.component.html',
  styleUrls: ['./publicar-consulta-mejora.component.css']
})
export class PublicarConsultaMejoraComponent implements OnInit {

  areasDisciplinares: any = [];
  categoriasConsulta: any = [];
  planesEstudio: any = [];
  recintos: any = [];
  selectedPlanEstudio = '';

  constructor(private areaDisciplinarService: AreaDisciplinarService, private categoriaConsultaService: CategoriaConsultaService,
    private planEstudioService: PlanEstudioService, private recintoService: RecintoService) {
    this.getPlanesEstudio();
    this.getCategoriasConsulta();
    this.getRecintos();
  }

  ngOnInit(): void {
  }

  getCategoriasConsulta() {
    this.categoriasConsulta = [];

    this.categoriaConsultaService.getAll().subscribe((data: {}) => {
      this.categoriasConsulta = data;
    })
  }

  getPlanesEstudio() {
    this.planesEstudio = [];

    this.planEstudioService.getAll().subscribe((data: {}) => {
      this.planesEstudio = data;
    })
  }

  getRecintos() {
    this.recintos = [];

    this.recintoService.getAll().subscribe((data: {}) => {
      this.recintos = data;
    })
  }
  selectedPlan(idPlanEstudio: number) {
    this.areasDisciplinares = this.planesEstudio[idPlanEstudio].areasDisciplinares;
  }
}
