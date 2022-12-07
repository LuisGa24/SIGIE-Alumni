import { CategoriaConsulta } from "./categoria-consulta";
import { ConsultaMejora } from "./consulta-mejora";
import { PersonaGraduada } from "./persona-graduada";

export class RespuestaMejora {
    constructor(
        public id?: number,
        public propuesta?: String,
        public categoriaConsulta?: CategoriaConsulta,
        public consultaMejora?: ConsultaMejora,
        public autor?: PersonaGraduada
    ) { }
}
