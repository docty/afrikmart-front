import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../../../service/market.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  data : any;
  constructor(private marketService: MarketService) { }

  ngOnInit(): void {
  	this.marketService.indexMaterial().subscribe(m => this.data = m);
  }

}
