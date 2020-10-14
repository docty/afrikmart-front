import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {

  dataValue = {
  	materialName : '',
  	manufacturerBrand : '',
  	price : '',
  	category : '',
  	description : '',
  	tag : ''
  }
  constructor() { }

  ngOnInit(): void {
  	$(".select2").select2();
  }

}
