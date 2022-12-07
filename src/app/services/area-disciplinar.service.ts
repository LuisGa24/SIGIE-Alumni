import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AreaDisciplinar } from '../domain/area-disciplinar';
import { Observable } from 'rxjs';

const endpoint = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AreaDisciplinarService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<AreaDisciplinar> {
    return this.http.get(endpoint + 'areaDisciplinar/getAll', httpOptions);
  }
}
