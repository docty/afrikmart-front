import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../../../service/staff.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-staff-profile',
  templateUrl: './staff-profile.component.html',
  styleUrls: ['./staff-profile.component.css']
})
export class StaffProfileComponent implements OnInit {

  id: string;
  private sub: any;
  dataValue: any = {
    otherName: '',
    surname: '',
    telephone: '',
    email: '',
    gender: ''
  };
  constructor(private route: ActivatedRoute, private staffService: StaffService) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.staffService.show(this.id).subscribe(
      data => {this.dataValue = data;}
    );
  }

}
