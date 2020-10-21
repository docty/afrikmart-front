import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../../../service/staff.service';
import {ActivatedRoute, Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {

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
    telephone: '',
    email : ''
  }
  constructor(private route: ActivatedRoute, private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.staffService.show(this.id).subscribe(
      data => {this.dataValue = data; $('#example-date-input').val(this.dataValue.dateCreated);}
    );
  }

  onUpdate(){
    $('.spinner-border').css('display', 'inline-block');
    this.staffService.update(this.id, this.dataValue).subscribe(
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
