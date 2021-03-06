import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../../service/order.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;
@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  data: any;
  value = {
    urlId : '',
    marketId : ''
  }
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  	this.orderService.index().subscribe(m => {
  		this.data = m; 
  		$('.spinner-border').css('display', 'none');
  	});
  }

  onSetId(id): void{
    this.value.urlId = id;
  }
  onProceed(): void{
     Swal.fire({
        title: 'Are you sure to  proceed this order ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes',
      }).then((isConfirm) => {
        if (isConfirm.value) {
          this.orderService.movePending(this.value).subscribe(
            (da) => {
              
              Swal.fire('Successful', 'Order is now processing', 'success');
              this.ngOnInit();
              this.value.marketId = '';
            }
          );
        }
      })
      
       
   }

}
