import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../../../service/market.service';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-style-add',
  templateUrl: './style-add.component.html',
  styleUrls: ['./style-add.component.css']
})
export class StyleAddComponent implements OnInit {

  dataValue = {
  	marketName : '',
  	location : '',
  	noEmployees : '',
  	customerId : ''
  }
  errorMessage: any = {
    marketName : '',
    location : '',
    noEmployees : '',
    customerId : ''
  } 
  constructor(private marketService: MarketService, private router: Router) { }

  ngOnInit(): void {
  }

  submitData(){
    $('.spinner-border').css('display', 'inline-block');
    this.marketService.storeStyle(this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.router.navigateByUrl('/v1/market/style');
          }
      }
    );
  	 
  	
  }

}
