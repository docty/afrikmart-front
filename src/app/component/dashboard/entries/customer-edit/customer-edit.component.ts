import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: string;
  private sub: any;
  dataValue: any = {
    otherName: '',
    surname: '',
    telephone: '',
    email: '',
    gender: ''
  };

  errorMessage: any = {
    otherName: '',
    surname: '',
    telephone: ''
  }
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.customerService.show(this.id).subscribe(
      data => {this.dataValue = data;}
    );
  }

  onUpdate(){
    $('.spinner-border').css('display', 'inline-block');
    this.customerService.update(this.id, this.dataValue).subscribe(
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
