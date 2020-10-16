import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../../../service/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  data: any;
  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
  	this.staffService.index().subscribe(m => this.data = m);
  }

}
