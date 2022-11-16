import { Injectable } from '@angular/core';
import { Docente } from '../domain/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private docentes: Array<Docente>;
  constructor() { this.docentes = []; }
  getDocentes(): Array<Docente> {
    this.docentes = [
      {
        nombre: "Rolando",
        apellidos: "Valderrama Rosario",
        cursos: ["Lenguajes", "Ingeniería"],
        annoIngreso: 1995,
        lugarResidencia: "Cartago"
      },
      {
        nombre: "Diana",
        apellidos: "Raventos Quiros",
        cursos: [
          "Fundamentos de bases de datos",
          "Informática aplicada a los negocios",
          "Práctica Empresarial"],
        annoIngreso: 2008,
        lugarResidencia: "Turrialba",
      }
    ];
    return this.docentes;
  }
}
