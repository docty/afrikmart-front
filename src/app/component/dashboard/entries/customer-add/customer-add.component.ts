import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../service/customer.service';
import {Router} from '@angular/router';
declare var $: any;

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

  errorMessage: any = {
    otherName: '',
    surname: '',
    telephone: '',
  }
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  } 

  submitData(){
  	$('.spinner-border').css('display', 'inline-block');
    this.customerService.store(this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.router.navigateByUrl('/v1/entries/customer');
          }
      }
    );
  	
  }

}
