import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$("#datatable").DataTable();
  }

}
