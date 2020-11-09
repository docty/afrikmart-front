import { Component, OnInit } from '@angular/core';
import {ProductMaterial} from '../../../../model/productMaterial.model';
import {ProductService} from '../../../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {

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

  id: string;
  private sub: any;
  
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.productService.showMaterial(this.id).subscribe(
      (data: ProductMaterial) => {this.dataValue = data;}
    );
  	$(".select2").select2();
  }

  onUpdateMaterial(){
    $('.spinner-border').css('display', 'inline-block');
    this.dataValue.category  = $('#category').val();
    this.dataValue.tag  = $('#tag').val();
    this.productService.updateMaterial(this.id, this.dataValue).subscribe(
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
