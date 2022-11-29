import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsultaMejora } from '../domain/consulta-mejora';

const endpoint = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ConsultaMejoraService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(endpoint + 'consultaMejora/getAll', httpOptions);
  }

  add(consultaMejora: ConsultaMejora) {
    return this.http.post(endpoint + 'consultaMejora/add',consultaMejora, httpOptions);
  }
  
}
