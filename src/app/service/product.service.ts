import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://127.0.0.1:8000/api';
  defaultURL = 'http://127.0.0.1:8000/images';

   
  
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
  showStyle(id){
    return this.httpClient.get(`${this.uri}/style/${id}`);
  }

  updateStyle(id, data){ 
    return this.httpClient.put(`${this.uri}/style/${id}`, data);
  }

  deleteStyle(id){
    return this.httpClient.delete(`${this.uri}/style/${id}`);
  }

  /*********************** URL  PROPERTIES  **********************/
  getURI(){
    return this.defaultURL;
  }
}
