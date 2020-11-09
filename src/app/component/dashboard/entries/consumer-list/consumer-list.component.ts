import { Component, OnInit } from '@angular/core';
import {ConsumerService} from '../../../../service/consumer.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $ : any;

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit {

  data: any;
  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
  	this.consumerService.index().subscribe(m => {
  		this.data = m; 
  		$('.spinner-border').css('display', 'none');
  	});
  } 

  onDelete(id): void{
	  	Swal.fire({
	      title: 'Are you sure to delete this consumer ?',
	      type: 'warning',
	      showCancelButton: true,
	      confirmButtonColor: '#34c38f',
	      cancelButtonColor: '#f46a6a',
	      confirmButtonText: 'Yes, delete it!',
	    }).then((isConfirm) => {
	      if (isConfirm.value) {
	        this.consumerService.delete(id).subscribe(
	          () => {
	            Swal.fire('Successful', 'Consumer has been deleted', 'success');
	            this.ngOnInit();
	          }
	        );
	      }
	  	});
  		 
  	}

}
