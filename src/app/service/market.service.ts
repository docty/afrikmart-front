import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

   
   uri = 'https://afrikmart.herokuapp.com/api';
  private defaultURL = 'https://afrikmart.herokuapp.com/images/'; 
   

  constructor(private httpClient: HttpClient) { }

  indexMaterial(){
     return this.httpClient.get(`${this.uri}/market-material`);
  }

  storeMaterial(data){
    return this.httpClient.post(`${this.uri}/market-material`, data);
  }

  showMaterial(id){
      return this.httpClient.get(`${this.uri}/market-material/${id}`);
  }

  
  updateMaterial(id, data){ 
    return this.httpClient.put(`${this.uri}/market-material/${id}`, data);
  }

  indexStyle(){
     return this.httpClient.get(`${this.uri}/market-style`);
  }

  storeStyle(data){
    return this.httpClient.post(`${this.uri}/market-style`, data);
  }

  deleteMaterial(id){
    return this.httpClient.delete(`${this.uri}/market-material/${id}`);
  }
  
  Storewallet(data){
    return this.httpClient.post(`${this.uri}/customer-wallet`, data);
  }

  getWallet(id){
    return this.httpClient.get(`${this.uri}/customer-wallet/${id}`);
  }
}
