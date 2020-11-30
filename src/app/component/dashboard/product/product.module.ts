import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard.module';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { StyleListComponent } from './style-list/style-list.component';
import { StyleAddComponent } from './style-add/style-add.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { StyleViewComponent } from './style-view/style-view.component';
import { StyleEditComponent } from './style-edit/style-edit.component';


@NgModule({
  declarations: [MaterialListComponent, MaterialAddComponent, StyleListComponent, StyleAddComponent, 
  MaterialViewComponent, MaterialEditComponent, StyleViewComponent, StyleEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule, DashboardModule, FormsModule, NgxDropzoneModule
  ]
})
export class ProductModule { }
