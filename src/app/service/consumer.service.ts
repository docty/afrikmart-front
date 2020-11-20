import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

   
   uri = 'https://afrikmart.herokuapp.com/api';
   
  

  constructor(private httpClient: HttpClient) { }

  index(){
     return this.httpClient.get(`${this.uri}/consumer`);
  }

  store(data){
    return this.httpClient.post(`${this.uri}/consumer`, data);
  }

  show(id){
    return this.httpClient.get(`${this.uri}/consumer/${id}`);
  }

  update(id, data){
    return this.httpClient.put(`${this.uri}/consumer/${id}`, data);
  }

  delete(id){
    return this.httpClient.delete(`${this.uri}/consumer/${id}`);
  }
}
