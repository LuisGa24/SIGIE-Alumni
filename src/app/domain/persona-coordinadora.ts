import { PlanEstudio } from "./plan-estudio";

export class PersonaCoordinadora {
    constructor(
        public id?: String,
        public nombre?: String,
        public apellidos?: String,
        public correoInstitucional?: String,
        public correoPersonal?: String,
        public fechaInicio?: Date,
        public planEstudio?: PlanEstudio

    ) { }
}
