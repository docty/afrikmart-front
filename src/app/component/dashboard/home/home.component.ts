import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../../service/dashboard.service'; 
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  dataValue: any = {
  	marketMaterial: 0,
  	marketStyle: 0,
  	material: 0,
  	style : 0
  }
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  	this.dashboardService.index().subscribe(data => {
		this.dataValue = data; 
		$('h4 > span').counterUp();
  	});
  	
  }

}
