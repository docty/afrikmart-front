import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  // uri = 'http://127.0.0.1:8000/api';
  uri = 'https://afrikmart.herokuapp.com/api';
   

  constructor(private httpClient: HttpClient) { }

  index(){
     return this.httpClient.get(`${this.uri}/staff`);
  }

  store(data){
    return this.httpClient.post(`${this.uri}/staff`, data);
  }

  show(id){
    return this.httpClient.get(`${this.uri}/staff/${id}`);
  }

  update(id, data){
    return this.httpClient.put(`${this.uri}/staff/${id}`, data);
  }

  delete(id){
    return this.httpClient.delete(`${this.uri}/staff/${id}`);
  }
}
