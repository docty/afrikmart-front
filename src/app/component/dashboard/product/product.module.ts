import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from '../dashboard.module';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { StyleListComponent } from './style-list/style-list.component';
import { StyleAddComponent } from './style-add/style-add.component';


@NgModule({
  declarations: [MaterialListComponent, MaterialAddComponent, StyleListComponent, StyleAddComponent],
  imports: [
    CommonModule,
    ProductRoutingModule, DashboardModule
  ]
})
export class ProductModule { }
