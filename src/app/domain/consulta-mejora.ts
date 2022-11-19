import { AreaDisciplinar } from "./area-disciplinar";
import { PlanEstudio } from "./plan-estudio";
import { Recinto } from "./recinto";
import { RespuestaMejora } from "./respuesta-mejora";

export class ConsultaMejora {
    constructor(
        public id?: String,
        public titulo?: String,
        public objetivo?: String,
        public instrucciones?: String,
        public fechaFinalizacion?: String,
        public anoGraduacionMax?: String,
        public anoGraduacionMin?: String,
        public nombrePersonaResponsableConsulta?: String,
        public apellidosPersonaResponsableConsulta?: String,
        public correoPersonaResponsableConsulta?: String,
        public recinto?: Recinto,
        public areaDisciplinar?: AreaDisciplinar,
        public planEstudio?: PlanEstudio,
        public respuestas?: RespuestaMejora,
    ) { }
}
