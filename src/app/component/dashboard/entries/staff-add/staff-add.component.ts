import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../../../service/staff.service';
import {Router} from '@angular/router';
declare var $: any;

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

  errorMessage: any = {
    otherName: '',
    surname: '',
    telephone: '',
    email : ''
  }

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
  }

  submitData(){
    $('.spinner-border').css('display', 'inline-block');
  	this.staffService.store(this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.router.navigateByUrl('/v1/entries/staff');
          }
      }
    );
  }

}
