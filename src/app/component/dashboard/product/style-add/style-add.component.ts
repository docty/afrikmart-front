import { Component, OnInit } from '@angular/core';
import {ProductMaterial} from '../../../../model/productMaterial.model';
import {ProductService} from '../../../../service/product.service';
import {Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-style-add',
  templateUrl: './style-add.component.html',
  styleUrls: ['./style-add.component.css']
})
export class StyleAddComponent implements OnInit {

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
        this.files.splice(this.files.indexOf(event), 1);
    }

  onSaveStyle(){
    $('.spinner-border').css('display', 'inline-block');
    this.dataValue.category  = $('#category').val();
    this.dataValue.tag  = $('#tag').val();
    this.formData.append('customerId', this.dataValue.customerId);
    this.productService.storeStyle(this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.formData.append('productId', data.productId);
            this.onSubmitProfile();
            this.router.navigateByUrl('/v1/product/style');
          }
      }
    );
  }

   onSubmitProfile(){
    this.productService.storeStyleImages(this.formData).subscribe(
      (data: any) => {
          // console.log(data);
      }
    );
     

  }

}
