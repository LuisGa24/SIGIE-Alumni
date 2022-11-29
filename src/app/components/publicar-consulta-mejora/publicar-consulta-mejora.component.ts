import { Component, OnInit } from '@angular/core';
import { CategoriaConsultaService } from 'src/app/services/categoria-consulta.service'
import { PlanEstudioService } from 'src/app/services/plan-estudio.service'
import { RecintoService } from 'src/app/services/recinto.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConsultaMejoraService } from 'src/app/services/consulta-mejora.service';
import { ConsultaMejora } from 'src/app/domain/consulta-mejora';
import { AreaDisciplinar } from 'src/app/domain/area-disciplinar';

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

  constructor(private fb: FormBuilder, private categoriaConsultaService: CategoriaConsultaService,
    private planEstudioService: PlanEstudioService, private recintoService: RecintoService,
    private dialog: MatDialog, private consultaMejoraService: ConsultaMejoraService) {

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
      recintoConsulta: ['', [Validators.required]],
      anoMaximoGraduacion: ['', [Validators.required]],
      anoMinimoGraduacion: ['', [Validators.required]],
      areaDisciplinar: ['', [Validators.required]]
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

  selectedPlan(index: number) {
    this.years = [];
    const currentYear = new Date().getFullYear();
     var plan = this.planesEstudio.filter((p: { id: number; }) => {
      return p.id === index
    })[0];
    this.areasDisciplinares = plan.areasDisciplinares;
    this.setYears(plan.anoAprobacion, currentYear);
    this.areasDisciplinares = plan.areasDisciplinares;
    this.idPlanEstudio = plan.id;

  }

  setYears(min: number, max: number) {
    for (min; min <= max; min++) {
      this.years.push(min);
    }
  }

  submitForm() {
    if (!this.consultaMejoraForm.valid) {
      this.dialog.open(DialogComponent, {
        width: '250px',
        data: { title: 'Error', message: 'Todos los espacios deben ser rellenados.' },
      });
    } else {

      var consultaMejora : any = this.consultaMejoraForm.value

      var area: AreaDisciplinar = this.areasDisciplinares.filter((a: { id: number; }) => {
        return a.id === consultaMejora.areaDisciplinar
      })[0];
      
      var consulta = new ConsultaMejora(
        '10',
        consultaMejora.nombreConsulta,
        consultaMejora.objetivoConsulta,
        consultaMejora.instruccionesConsulta,
        consultaMejora.fechaMaxAceptacionRes,
        consultaMejora.anoMaximoGraduacion,
        consultaMejora.anoMinimoGraduacion,
        consultaMejora.nombreResponsable,
        consultaMejora.apellidosResponsable,
        consultaMejora.emailResponsable,
        consultaMejora.recintoConsulta,
        area,
        consultaMejora.planEstudio,
        consultaMejora.respuestas
      )
      
      this.consultaMejoraService.add(this.consultaMejoraForm.value).subscribe((result) => {
        
        this.dialog.open(DialogComponent, {
          width: '250px',
          data: { title: 'Ok', message: 'Consulta de mejora publicada con éxito.' },
        });

      }, (err) => {

        this.dialog.open(DialogComponent, {
          width: '250px',
          data: { title: 'Error', message: 'No se pudo publicar la consulta de mejora en este momento.' },
        });

      });


    }

  }
}
