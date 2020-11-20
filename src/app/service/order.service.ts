import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   uri = 'http://127.0.0.1:8000/api';
   
   

  constructor(private httpClient: HttpClient) { }

  index(){
     return this.httpClient.get(`${this.uri}/order`);
  }

  indexProcessing(){
     return this.httpClient.get(`${this.uri}/order-processing`);
  }

  indexDelivering(){
     return this.httpClient.get(`${this.uri}/order-delivering`);
  }

  indexComplete(){
  	return this.httpClient.get(`${this.uri}/order-complete`);
  	
  }

   movePending(id){
   	  return this.httpClient.post(`${this.uri}/move-pending`, id);	
   }

   moveProcessing(id){
   		  return this.httpClient.post(`${this.uri}/move-processing`, id);	
   }

   moveDelivering(id){
         return this.httpClient.post(`${this.uri}/move-delivering`, id);  
   }
}
