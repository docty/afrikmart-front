import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../../service/order.service';
declare var $: any;
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  data: any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  	this.orderService.index().subscribe(m => {
  		this.data = m; 
  		$('.spinner-border').css('display', 'none');
  	});
  }

}
