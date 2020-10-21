import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  id: string;
  private sub: any;
  dataValue: any = {
    otherName: '',
    surname: '',
    telephone: '',
    email: '',
    gender: ''
  };
  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.customerService.show(this.id).subscribe(
      data => {this.dataValue = data;}
    );
  }

}
