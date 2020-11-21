import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../service/product.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $: any;

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.css']
})
export class StyleListComponent implements OnInit {

  data : any;
  defaultUrl = '';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.defaultUrl = this.productService.getURI();
  	this.productService.indexStyle().subscribe(m => 
    {
      this.data = m;
      setTimeout(() => $('#datatable').DataTable(), 1000);
    });
  	
  	
  }




  onDelete(id): void{
      Swal.fire({
        title: 'Are you sure to delete this style product ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes, delete',
      }).then((isConfirm) => {
        if (isConfirm.value) {
          this.productService.deleteStyle(id).subscribe(
            () => {
              Swal.fire('Successful', 'Style has been deleted', 'success');
              this.ngOnInit();
            }
          );
        }
      });
       
    } 

}
