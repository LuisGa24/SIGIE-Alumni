import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recinto } from '../domain/recinto';

const endpoint = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class RecintoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Recinto> {
    return this.http.get(endpoint + 'recinto/getAll', httpOptions);
  }
}
