import { Component, OnInit } from '@angular/core';
import { AreaDisciplinarService } from 'src/app/services/area-disciplinar.service';
import { CategoriaConsultaService } from 'src/app/services/categoria-consulta.service'
import { PlanEstudioService } from 'src/app/services/plan-estudio.service'
import { RecintoService } from 'src/app/services/recinto.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-publicar-consulta-mejora',
  templateUrl: './publicar-consulta-mejora.component.html',
  styleUrls: ['./publicar-consulta-mejora.component.css']
})
export class PublicarConsultaMejoraComponent implements OnInit {

  years: any = [];
  areasDisciplinares: any = [];
  categoriasConsulta: any = [];
  planesEstudio: any = [];
  recintos: any = [];
  selectedPlanEstudio = '';
  consultaMejoraForm: FormGroup;
  idPlanEstudio = 0;

  constructor(private fb: FormBuilder, private areaDisciplinarService: AreaDisciplinarService, private categoriaConsultaService: CategoriaConsultaService,
    private planEstudioService: PlanEstudioService, private recintoService: RecintoService) {
    const currentYear = new Date().getFullYear();
    this.setYears(2000, currentYear);
    this.getPlanesEstudio();
    this.getCategoriasConsulta();
    this.getRecintos();

    this.consultaMejoraForm = this.fb.group({
      nombreConsulta: ['', [Validators.required]],
      nombreResponsable: ['', [Validators.required]],
      emailResponsable: ['', [Validators.required]],
      apellidosResponsable: ['', [Validators.required]],
      objetivoConsulta: ['', [Validators.required]],
      instruccionesConsulta: ['', [Validators.required]],
      planEstudio: [this.idPlanEstudio, [Validators.required]],
      fechaMaxAceptacionRes: ['', [Validators.required]],
    })

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

  setYears(min: number, max: number) {
    for (min; min <= max; min++) {
      this.years.push(min);
    }
  }
  submitForm() {

  }
}
