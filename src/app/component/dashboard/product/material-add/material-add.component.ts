import { Component, OnInit } from '@angular/core';
import {ProductMaterial} from '../../../../model/productMaterial.model';
import {ProductService} from '../../../../service/product.service';

declare var $: any;
@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {

  dataValue: ProductMaterial = {
    materialName : '',
    manufacturerBrand : '',
    price : '',
    category : '',
    description : '',
    tag : ''
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  	$(".select2").select2();
  }

  onSaveMaterial(){
    this.dataValue.category  = $('#category').val();
    this.dataValue.tag  = $('#tag').val();
    this.productService.storeMaterial(this.dataValue).subscribe(m => console.log(m));
  }

}
