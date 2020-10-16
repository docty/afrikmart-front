import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../../../service/market.service';
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
  constructor(private marketService: MarketService) { }

  ngOnInit(): void {
  }

  submitData(){
  	this.marketService.storeStyle(this.dataValue).subscribe(m => console.log(m));
  	
  }

}
