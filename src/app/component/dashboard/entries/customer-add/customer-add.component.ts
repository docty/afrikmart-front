import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  dataValue = {
	  	surname : '',
	  	otherName : '',
	  	email : '',
	  	telephone : '',
	  	gender : 'Female',
	}
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  submitData(){
  	this.customerService.store(this.dataValue).subscribe(m => console.log(m));
  	
  }

}
