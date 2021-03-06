import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

    
   uri = 'https://afrikmart.herokuapp.com/api';
  private defaultURL = 'https://afrikmart.herokuapp.com/images/'; 

  constructor(private httpClient: HttpClient) { }

  index(){
     return this.httpClient.get(`${this.uri}/customer-wallet`);
  }

  store(data){
    return this.httpClient.post(`${this.uri}/customer-wallet`, data);
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
