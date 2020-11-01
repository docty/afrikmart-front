import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../../service/order.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  data: any;
   
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  	this.orderService.indexComplete().subscribe(m => {
  		this.data = m; 
  		$('.spinner-border').css('display', 'none');
  	});
  }

}
