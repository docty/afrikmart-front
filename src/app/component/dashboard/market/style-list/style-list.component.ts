import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../../../service/market.service';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.css']
})
export class StyleListComponent implements OnInit {

  data : any;
  constructor(private marketService: MarketService) { }

  ngOnInit(): void {
  	this.marketService.indexStyle().subscribe(m => this.data = m);
  }

}
