import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

   uri = 'http://127.0.0.1:8000/api';
   private defaultURL = 'http://127.0.0.1:8000/images';
  

  constructor(private httpClient: HttpClient) { }

  index(){
     return this.httpClient.get(`${this.uri}/shop`);
  }

  store(data){
    return this.httpClient.post(`${this.uri}/shop`, data);
  }

  delete(id){
  	return this.httpClient.delete(`${this.uri}/shop/${id}`);
  }
   
   
   /*********************** URL  PROPERTIES  **********************/
  getURI(){
    return this.defaultURL;
  }
}
