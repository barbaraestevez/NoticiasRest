import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) {}

    getNoticias(param:any): Observable<any>{  //promesa es el output y el observable es el input
      const URL = 'https://newsapi.org/v2/top-headlines?country='+param.pais+'&category='+param.categoria+'&apiKey=6929886ad7154d0bbbe769e10ee273a2';
      return this.http.get(URL);
    }
}
