import { Component, OnInit } from '@angular/core';
import {MarketService} from '../../../../service/market.service';
import Swal from '../../../../../assets/libs/sweetalert2/sweetalert2.min';
declare var $:any;
@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  data : any;
  constructor(private marketService: MarketService) { }

  ngOnInit(): void {
  	this.marketService.indexMaterial().subscribe(m => {
  		this.data = m;
  		$('.spinner-border').css('display', 'none');
  	});
  }


  onDelete(id): void{
      Swal.fire({
        title: 'Are you sure to delete this market ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Yes, delete',
      }).then((isConfirm) => {
        if (isConfirm.value) {
          this.marketService.deleteMaterial(id).subscribe(
            () => {
              Swal.fire('Successful', 'Market has been deleted', 'success');
              this.ngOnInit();
            }
          );
        }
      });
       
    }

}
