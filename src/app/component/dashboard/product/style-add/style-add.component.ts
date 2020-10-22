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

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  	$(".select2").select2();
  }

  onSaveStyle(){
    $('.spinner-border').css('display', 'inline-block');
    this.dataValue.category  = $('#category').val();
    this.dataValue.tag  = $('#tag').val();
    this.productService.storeStyle(this.dataValue).subscribe(
      (data: any) => {
          if(data.error){
            $('.spinner-border').css('display', 'none');
            this.errorMessage = data.error;
          }else{
            this.router.navigateByUrl('/v1/product/style');
          }
      }
    );
  }

}
