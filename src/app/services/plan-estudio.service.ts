import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanEstudio } from '../domain/plan-estudio';

const endpoint = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanEstudioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PlanEstudio> {
    return this.http.get(endpoint + 'planEstudio/getAll', httpOptions);
  }

}
