import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../service/product.service';
declare var $: any;

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.css']
})
export class StyleListComponent implements OnInit {

  data : any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  	this.productService.indexStyle().subscribe(m => 
    {
      this.data = m;
      setTimeout(() => $('#datatable').DataTable(), 1000);
    });
  	
  	
  }

}
