import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  baseurl = 'https://jsonplaceholder.typicode.com/posts';
  url1 = 'https://restcountries.eu/rest/v2/all';
  url2="https://restcountries.eu/rest/v2/name/peru?fullText=true"
  constructor(private http: HttpClient) {
  }

  getjsonplaceholder(): Observable<any> { 
    return this.http.get(this.baseurl);
  }
  getPais(): Observable<any> { 
    return this.http.get(this.url1);
  }
  getPeru(): Observable<any> { 
    return this.http.get(this.url2);
  }
}
