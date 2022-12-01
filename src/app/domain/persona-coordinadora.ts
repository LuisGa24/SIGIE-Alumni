import { PlanEstudio } from "./plan-estudio";

export class PersonaCoordinadora {
    constructor(
        public id?: number,
        public nombre?: String,
        public apellidos?: String,
        public correoInstitucional?: String,
        public correoPersonal?: String,
        public fechaInicio?: Date,
        public planEstudio?: PlanEstudio

    ) { }
}
