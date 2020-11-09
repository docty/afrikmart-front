import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../../service/order.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;

@Component({
  selector: 'app-delivering',
  templateUrl: './delivering.component.html',
  styleUrls: ['./delivering.component.css']
})
export class DeliveringComponent implements OnInit {

  data: any;
   
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  	this.orderService.indexDelivering().subscribe(m => {
  		this.data = m; 
  		$('.spinner-border').css('display', 'none');
  	});
  }

  onComplete(id): void{
       
         
      Swal.fire({
        title: 'Are you sure to  complete this order ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then((isConfirm) => {
        if (isConfirm.value) {
          this.orderService.moveDelivering(id).subscribe(
            () => {
              Swal.fire('Successful', 'Order is now completed', 'success');
              this.ngOnInit();
            }
          );
        }
      });
       
    }

}
