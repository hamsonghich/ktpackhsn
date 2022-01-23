import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataJsonServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };
  constructor(private  httpClient: HttpClient) {

  }
  public getDataJsonCustom(key: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/${{key}}`;
    console.log('url get : ' + url);
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public postDataJsonCustom(key: any, payload: any): Observable<any>{
    const url =  `${this.REST_API_SERVER}/` + key;
    console.log('url post : ' + url);
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }
}

