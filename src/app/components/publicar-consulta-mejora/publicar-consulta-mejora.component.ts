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
import { Recinto } from 'src/app/domain/recinto';
import { PlanEstudio } from 'src/app/domain/plan-estudio';

@Component({
  selector: 'app-publicar-consulta-mejora',
  templateUrl: './publicar-consulta-mejora.component.html',
  styleUrls: ['./publicar-consulta-mejora.component.css']
})
export class PublicarConsultaMejoraComponent implements OnInit {

  allRecintosSelected = false;
  years: any = [];
  areasDisciplinares: any = [];
  categoriasConsulta: any = [];
  planesEstudio: any = [];
  recintos: any = [];
  selectedRecintos: any = [];
  selectedPlanEstudio = '';
  consultaMejoraForm: FormGroup;
  idPlanEstudio = 0;
  currentDate = '';


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
      recintoConsulta: ['', []],
      anoMaximoGraduacion: ['', [Validators.required]],
      anoMinimoGraduacion: ['', [Validators.required]],
      areaDisciplinar: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
    this.currentDate = this.getActualUTCDateFormated();
  }

  getActualUTCDateFormated() {
    let date = new Date();
    var currentDate = date.getFullYear() + '-' + date.getUTCMonth() + '-' + date.getDate() + 'T00:00';
    return currentDate;
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

  selectedPlan(idPlanEstudio: Number) {
    console.log(idPlanEstudio);
    this.years = [];
    const currentYear = new Date().getFullYear();
    var plan = this.planesEstudio.filter((p: { id: number }) => {
      return p.id == idPlanEstudio
    })[0];
    this.areasDisciplinares = plan.areasDisciplinares;
    this.setYears(plan.anoAprobacion, currentYear);
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

      /********************************************************************************* */
      var recintosMejora: Recinto[] = this.getAllRecintoById();
      /********************************************************************************** */
      var consultaMejora: any = this.consultaMejoraForm.value;

      var planEstudio: PlanEstudio = this.planesEstudio.filter((a: { id: number }) => {
        return a.id == this.idPlanEstudio
      })[0]

      var area: AreaDisciplinar = this.areasDisciplinares.filter((a: { id: number; }) => {
        return a.id == consultaMejora.areaDisciplinar
      })[0];

      var consulta = new ConsultaMejora(
        0,
        consultaMejora.nombreConsulta,
        consultaMejora.objetivoConsulta,
        consultaMejora.instruccionesConsulta,
        consultaMejora.fechaMaxAceptacionRes,
        consultaMejora.anoMaximoGraduacion,
        consultaMejora.anoMinimoGraduacion,
        consultaMejora.nombreResponsable,
        consultaMejora.apellidosResponsable,
        consultaMejora.emailResponsable,
        recintosMejora,
        area,
        planEstudio,
        consultaMejora.respuestas
      )

      if (consulta.anoGraduacionMin > consulta.anoGraduacionMax) {
        this.dialog.open(DialogComponent, {
          width: '250px',
          data: { title: 'Error', message: 'El año máximo y mínimo de graduación no es válido. Verifique que las fechas estén correctas.' },
        });
      } else {
        this.consultaMejoraService.add(consulta).subscribe((result) => {

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

  selectCheckBox(idRecinto: number) {
    if (idRecinto != 9999) {
      if (this.selectedRecintos.length > 0 && this.selectedRecintos.filter((a: number) => {
        return a === idRecinto
      }).length > 0) {
        //Remove object in array
        this.deleteItem(idRecinto);
      } else {
        this.selectedRecintos.push(idRecinto);
      }
    } else {
      if (this.allRecintosSelected == false) {
        this.selectedRecintos = [];
        for (let i = 0; i < this.recintos.length; i++) {
          this.selectedRecintos.push(this.recintos[i].id)
        }
        this.allRecintosSelected = true;
      } else {
        this.selectedRecintos = [];
        this.allRecintosSelected = false;
      }
    }
  }

  selectCheckBoxCategoriaConsulta(idCategoriaConsulta: number) {

  }

  deleteItem(target: number) {
    var i = 0;
    while (i < this.selectedRecintos.length) {
      if (this.selectedRecintos[i] === target) {
        this.selectedRecintos.splice(i, 1);
      } else {
        ++i;
      }
    }
  }

  getAllRecintoById() {
    let recintoOptionSelected: any = [];
    for (let i = 0; i < this.selectedRecintos.length; i++) {

      recintoOptionSelected.push(this.recintos.filter((a: { id: number }) => {
        return a.id === this.selectedRecintos[i]
      })[0]);

    }
    return recintoOptionSelected;
  }

}

