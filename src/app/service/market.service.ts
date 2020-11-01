import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  uri = 'http://127.0.0.1:8000/api';
  

  constructor(private httpClient: HttpClient) { }

  indexMaterial(){
     return this.httpClient.get(`${this.uri}/market-material`);
  }

  storeMaterial(data){
    return this.httpClient.post(`${this.uri}/market-material`, data);
  }

  indexStyle(){
     return this.httpClient.get(`${this.uri}/market-style`);
  }

  storeStyle(data){
    return this.httpClient.post(`${this.uri}/market-style`, data);
  }

  Storewallet(data){
    return this.httpClient.post(`${this.uri}/customer-wallet`, data);
  }

  getWallet(id){
    return this.httpClient.get(`${this.uri}/customer-wallet/${id}`);
  }
}
