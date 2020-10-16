import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../service/product.service';
declare var $: any;
@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  data : any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  	this.productService.indexMaterial().subscribe(m => 
    {
      this.data = m;
      setTimeout(() => $('#datatable').DataTable(), 1000);
    });
  	
  	
  } 

}
