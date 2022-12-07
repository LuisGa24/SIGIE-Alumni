import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CategoriaConsulta } from '../domain/categoria-consulta';


const endpoint = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaConsultaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CategoriaConsulta> {
    return this.http.get(endpoint + 'categoriaConsulta/getAll', httpOptions);
  }
}
