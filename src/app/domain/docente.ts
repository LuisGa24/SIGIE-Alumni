export class Docente {
    constructor(
        public nombre?: String,
        public apellidos?: String,
        public cursos?: Array<String>,
        public annoIngreso?: number,
        public lugarResidencia?: String
    ) { }
}
