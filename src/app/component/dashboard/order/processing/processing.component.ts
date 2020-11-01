import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../../service/order.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  data: any;
  value = {
    urlId : ''
  }
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  	this.orderService.indexProcessing().subscribe(m => {
  		this.data = m; 
  		$('.spinner-border').css('display', 'none');
  	});
  }

  onComplete(id): void{
      this.value.urlId = id;
         
      Swal.fire({
        title: 'Are you sure to  complete this order ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then((isConfirm) => {
        if (isConfirm.value) {
          this.orderService.moveProcessing(this.value).subscribe(
            (da) => {
              console.log(da);
              Swal.fire('Successful', 'Order is now completed', 'success');
              this.ngOnInit();
            }
          );
        }
      });
       
    }

}
