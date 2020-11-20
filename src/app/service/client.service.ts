import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

   
  uri = 'https://afrikmart.herokuapp.com/api';
  private defaultURL = 'https://afrikmart.herokuapp.com/images/'; 

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
