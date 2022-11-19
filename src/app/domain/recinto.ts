import { PersonaGraduada } from "./persona-graduada";

export class Recinto {
    constructor(
        public id?: String,
        public nombre?: String,
        public direccion?: String,
        public numTelefono?: String,
        public sitioWeb?: String,
        public personasGraduadas?: Array<PersonaGraduada>,
    ) { }
}
