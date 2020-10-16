import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  data: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  	this.customerService.index().subscribe(m => this.data = m);
  }

}
