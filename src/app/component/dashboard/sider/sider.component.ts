import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$("#side-menu").metisMenu();
  }

}
