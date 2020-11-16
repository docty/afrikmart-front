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
    description : '',
    customerName: '',
    customerId: ''
  }

  
  
  files: File[] = [];
  formData = new FormData();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  	$(".select2").select2();
    
  }

  onSelect(event) {
        this.files.push(...event.addedFiles);
        this.formData = new FormData();
    
        for (var i = 0; i < this.files.length; i++) { 
          this.formData.append("file[]", this.files[i]);
        }
   
        
    }
  
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
  onSaveMaterial(){
    $('.spinner-border').css('display', 'inline-block');
    this.dataValue.category  = $('#category').val();
    this.dataValue.tag  = $('#tag').val();
    this.formData.append('customerId', this.dataValue.customerId);
    this.productService.storeMaterial(this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.formData.append('productId', data.productId);
            this.onSubmitProfile();
            this.router.navigateByUrl('/v1/product/material');
          }
      }
    );
    
  }

   
  onSubmitProfile(){
    this.productService.storeMaterialImages(this.formData).subscribe(
      (data: any) => {
          // console.log(data);
      }
    );
     

  }
}
