import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   
  uri = 'https://afrikmart.herokuapp.com/api';
  private defaultURL = 'https://afrikmart.herokuapp.com/images/';  
  
  constructor(private httpClient: HttpClient) { }

  indexMaterial(){
     return this.httpClient.get(`${this.uri}/material`);
  }

  storeMaterial(data){
    return this.httpClient.post(`${this.uri}/material`, data);
  }

  storeMaterialImages(data){
      return this.httpClient.post(`${this.uri}/material-images`, data);
  }

  showMaterial(id){
    return this.httpClient.get(`${this.uri}/material/${id}`);
  }

  updateMaterial(id, data){ 
    return this.httpClient.put(`${this.uri}/material/${id}`, data);
  }

  deleteMaterial(id){
    return this.httpClient.delete(`${this.uri}/material/${id}`);
  }

  /*********************** STYLE  PROPERTIES  **********************/
  indexStyle(){
     return this.httpClient.get(`${this.uri}/style`);
  }

  
  storeStyle(data){
    return this.httpClient.post(`${this.uri}/style`, data);
  }
  storeStyleImages(data){
      return this.httpClient.post(`${this.uri}/style-images`, data);
  }

  deleteStyle(id){
    return this.httpClient.delete(`${this.uri}/style/${id}`);
  }

  /*********************** URL  PROPERTIES  **********************/
  getURI(){
    return this.defaultURL;
  }
}
