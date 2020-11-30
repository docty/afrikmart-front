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

  files: File[] = [];
  formData = new FormData();

  constructor(private route: ActivatedRoute, private staffService: StaffService) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.staffService.show(this.id).subscribe(
      data => {this.dataValue = data;}
    );
  }


  onSelect(event) {
    this.files.push(...event.addedFiles);
    this.formData = new FormData();

    for (var i = 0; i < this.files.length; i++) { 
      this.formData.append("file[]", this.files[i]);
    }
   
        
  }
  
    onRemove(event) {
        this.files.splice(this.files.indexOf(event), 1);
    }

}
