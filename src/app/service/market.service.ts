import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  uri = 'http://127.0.0.1:8000/api';
   
   

  constructor(private httpClient: HttpClient) { }

  /*************  MATERIAL     *************************/
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

  deleteMaterial(id){
    return this.httpClient.delete(`${this.uri}/market-material/${id}`);
  }

  /*************  STYLE     *************************/
  indexStyle(){
     return this.httpClient.get(`${this.uri}/market-style`);
  }

  storeStyle(data){
    return this.httpClient.post(`${this.uri}/market-style`, data);
  }

  showStyle(id){
      return this.httpClient.get(`${this.uri}/market-style/${id}`);
  }

  updateStyle(id, data){ 
    return this.httpClient.put(`${this.uri}/market-style/${id}`, data);
  }

  deleteStyle(id){
    return this.httpClient.delete(`${this.uri}/market-style/${id}`);
  }

  /*************  OTHERS     *************************/

  Storewallet(data){
    return this.httpClient.post(`${this.uri}/customer-wallet`, data);
  }



  getWallet(id){
    return this.httpClient.get(`${this.uri}/customer-wallet/${id}`);
  }
}
