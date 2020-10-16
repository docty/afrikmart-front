import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../../../service/market.service';
@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {

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
  	this.marketService.storeMaterial(this.dataValue).subscribe(m => console.log(m));
  	
  }

}
