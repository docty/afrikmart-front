import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../service/customer.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $ : any;
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  data: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  	this.customerService.index().subscribe(m => {
  		this.data = m; 
  		$('.spinner-border').css('display', 'none');
  	});
  }

  onDelete(id): void{
	  	Swal.fire({
	      title: 'Are you sure to delete this customer ?',
	      type: 'warning',
	      showCancelButton: true,
	      confirmButtonColor: '#34c38f',
	      cancelButtonColor: '#f46a6a',
	      confirmButtonText: 'Yes, delete it!',
	    }).then((isConfirm) => {
	      if (isConfirm.value) {
	        this.customerService.delete(id).subscribe(() =>
	          () => {
	            Swal.fire('Successful', 'Customer has been deleted', 'success');
	            this.ngOnInit();
	          }
	        );
	      }
	  	});
  		 
  	}

}
