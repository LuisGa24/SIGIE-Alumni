import { Component, OnInit } from '@angular/core';
import { PlanEstudio } from 'src/app/domain/plan-estudio';
import { AreaDisciplinarService } from 'src/app/services/area-disciplinar.service';
import { CategoriaConsultaService } from 'src/app/services/categoria-consulta.service'
import { PlanEstudioService } from 'src/app/services/plan-estudio.service'



@Component({
  selector: 'app-publicar-consulta-mejora',
  templateUrl: './publicar-consulta-mejora.component.html',
  styleUrls: ['./publicar-consulta-mejora.component.css']
})
export class PublicarConsultaMejoraComponent implements OnInit {

  areasDisciplinares: any = [];
  categoriasConsulta: any = [];
  planesEstudio: any = [];
  selectedPlanEstudio = '';

  constructor(private areaDisciplinarService: AreaDisciplinarService, private categoriaConsultaService: CategoriaConsultaService,
    private planEstudioService: PlanEstudioService) {
    this.getPlanesEstudio();
    this.getCategoriasConsulta();
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

  selectedPlan(idPlanEstudio: number) {
    this.areasDisciplinares = this.planesEstudio[idPlanEstudio].areasDisciplinares;
  }
}
