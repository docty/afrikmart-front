import { Component, OnInit } from '@angular/core';
import {StaffService} from '../../../../service/staff.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  	data: any;
  	constructor(private staffService: StaffService) { }

	ngOnInit(): void {
	  	this.staffService.index().subscribe(m => {
        this.data = m;
        $('.spinner-border').css('display', 'none');
      });
	}

  	onDelete(id): void{
      Swal.fire({
        title: 'Are you sure to delete this staff ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes, delete it!',
      }).then((isConfirm) => {
        if (isConfirm.value) {
          this.staffService.delete(id).subscribe(
            () => {
              Swal.fire('Successful', 'Staff has been deleted', 'success');
              this.ngOnInit();
            }
          );
        }
      });
  		 
  	}
}
