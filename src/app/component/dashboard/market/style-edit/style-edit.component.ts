import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MarketService} from '../../../../service/market.service';
declare var $: any;

@Component({
  selector: 'app-style-edit',
  templateUrl: './style-edit.component.html',
  styleUrls: ['./style-edit.component.css']
})
export class StyleEditComponent implements OnInit {

  id: string;
  private sub: any;

  dataValue:any = {
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
  constructor(private marketService: MarketService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.marketService.showStyle(this.id).subscribe(
      data => {this.dataValue = data;}
    );
  }
  

  updateData(){
    $('.spinner-border').css('display', 'inline-block');
    this.marketService.updateStyle(this.id,this.dataValue).subscribe(
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
