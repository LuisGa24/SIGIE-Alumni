import { PlanEstudio } from "./plan-estudio";
import { Recinto } from "./recinto";

export class PersonaGraduada {
    constructor(
        public id?: number,
        public nombre?: String,
        public apellidos?: String,
        public anoGraduacion?: number,
        public numCarne?: String,
        public promedioPonderado?: Number,
        public telefono?: String,
        public correo?: String,
        public carreras?: Array<PlanEstudio>,
        public recinto?: Recinto
    ) { }
}
