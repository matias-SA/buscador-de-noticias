import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  getNoticias(parametros): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?country=' +
      parametros.pais +
      '&category=' +
      parametros.categoria +
      '&apiKey=e7b508f80d0a49bdaf75e9c3a2f76d27';
    return this.http.get(URL);
  }
}
