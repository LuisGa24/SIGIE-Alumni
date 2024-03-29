import { AreaDisciplinar } from "./area-disciplinar";
import { PersonaCoordinadora } from "./persona-coordinadora";
import { PersonaGraduada } from "./persona-graduada";

export class PlanEstudio {
    constructor(
        public id?: number,
        public codCarrera?: String,
        public nombreCarrera?: String,
        public anoAprovacion?: number,
        public coordinador?: PersonaCoordinadora,
        public areasDisciplinares?: Array<AreaDisciplinar>,
        public personasGraduadas?: Array<PersonaGraduada>

    ) { }
}
