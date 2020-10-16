import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../../../service/staff.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent implements OnInit {

  dataValue = {
	  	surname : '',
	  	otherName : '',
	  	email : '',
	  	telephone : '',
	  	gender : 'Female',
	  	dateCreated : ''
	}
  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
  }

  submitData(){
  	this.staffService.store(this.dataValue).subscribe(m => console.log(m));
  	
  }

}
