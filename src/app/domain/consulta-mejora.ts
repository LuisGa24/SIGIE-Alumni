import { AreaDisciplinar } from "./area-disciplinar";
import { PlanEstudio } from "./plan-estudio";
import { Recinto } from "./recinto";
import { RespuestaMejora } from "./respuesta-mejora";

export class ConsultaMejora {
    constructor(
        public id: number,
        public titulo: String,
        public objetivo: String,
        public instrucciones: String,
        public fechaFinalizacion: Date,
        public anoGraduacionMax: number,
        public anoGraduacionMin: number,
        public nombrePersonaResponsableConsulta: String,
        public apellidosPersonaResponsableConsulta: String,
        public correoPersonaResponsableConsulta: String,
        public recintos: Array<Recinto>,
        public areaDisciplinar: AreaDisciplinar,
        public planEstudio: PlanEstudio,
        public respuestas: RespuestaMejora,
    ) { }
}
