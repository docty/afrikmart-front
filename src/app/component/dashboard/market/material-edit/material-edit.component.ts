import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MarketService} from '../../../../service/market.service';
declare var $: any;

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {

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
    this.marketService.showMaterial(this.id).subscribe(
      data => {this.dataValue = data;}
    );
  }
  

  updateData(){
    $('.spinner-border').css('display', 'inline-block');
    this.marketService.updateMaterial(this.id,this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.router.navigateByUrl('/v1/market/material');
          }
      }
    );
  }

}
