import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../../../service/market.service';
import {ActivatedRoute} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {

  id: string;
  private sub: any;
  dataValue: any = {};
  constructor(private route: ActivatedRoute, private marketService: MarketService) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.marketService.showMaterial(this.id).subscribe(
      data => {this.dataValue = data; $('.spinner-border').css('display', 'none');}
    );
  }

} 
