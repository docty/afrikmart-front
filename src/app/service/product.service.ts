import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://127.0.0.1:8000/api';
  

  constructor(private httpClient: HttpClient) { }

  indexMaterial(){
     return this.httpClient.get(`${this.uri}/material`);
  }

  storeMaterial(data){
    return this.httpClient.post(`${this.uri}/material`, data);
  }

  indexStyle(){
     return this.httpClient.get(`${this.uri}/style`);
  }

  storeStyle(data){
    return this.httpClient.post(`${this.uri}/style`, data);
  }
}
