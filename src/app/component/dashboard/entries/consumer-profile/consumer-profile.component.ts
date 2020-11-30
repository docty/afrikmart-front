import { Component, OnInit } from '@angular/core';
import {ConsumerService} from '../../../../service/consumer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.component.html',
  styleUrls: ['./consumer-profile.component.css']
})
export class ConsumerProfileComponent implements OnInit {

  id: string;
  private sub: any;
   dataValue: any; //= {
  //   firstName: '',
  //   lastName: '',
  //   phoneNumber: '',
  //   email: '',
  //   country: ''
  // };
  constructor(private route: ActivatedRoute, private consumerService: ConsumerService) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.consumerService.show(this.id).subscribe(
      data => {this.dataValue = data; console.log(this.dataValue);}
    );
  }

}
