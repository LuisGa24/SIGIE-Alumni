import { AreaDisciplinar } from "./area-disciplinar";
import { PersonaCoordinadora } from "./persona-coordinadora";

export class PlanEstudio {
    constructor(
        public id?: String,
        public codCarrera?: String,
        public nombreCarrera?: String,
        public anoAprovacion?: String,
        public coordinador?: PersonaCoordinadora,
        public areasDisciplinares?: Array<AreaDisciplinar>

    ) { }
}
