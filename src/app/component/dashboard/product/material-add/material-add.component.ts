import { Component, OnInit } from '@angular/core';
import {ProductMaterial} from '../../../../model/productMaterial.model';
import {ProductService} from '../../../../service/product.service';
import {Router} from '@angular/router';
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
    tag : '',
    quantity: '',
    customerName: '',
    customerId: ''
  }

  errorMessage: any = {
    materialName: '',
    price: '',
    category: '',
    quantity: '',
    customerName: '',
    customerId: ''
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  	$(".select2").select2();
  }

  onSaveMaterial(){
    $('.spinner-border').css('display', 'inline-block');
    this.dataValue.category  = $('#category').val();
    this.dataValue.tag  = $('#tag').val();
    this.productService.storeMaterial(this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.router.navigateByUrl('/v1/product/material');
          }
      }
    );
  }

}
