import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../service/product.service';
import {ActivatedRoute} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {

  id: string;
  private sub: any;
  dataValue: any = {};
  imageHolder:any;
  defaultUrl = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.defaultUrl = this.productService.getURI();
  	this.sub = this.route.params.subscribe(params => {
      this.id = params.url;
    });
    this.productService.showMaterial(this.id).subscribe(
      data => {
        this.dataValue = data;
        this.imageHolder = this.dataValue.image.split('<>');
        
        
      }
    );

    setTimeout(()=>{$('#product-1-tab').addClass('active');}, 2000);
  }


}
 