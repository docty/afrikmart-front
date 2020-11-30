import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard.module';
import { MarketRoutingModule } from './market-routing.module';
import { MaterialListComponent } from './material-list/material-list.component';
import { StyleListComponent } from './style-list/style-list.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { StyleAddComponent } from './style-add/style-add.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { StyleViewComponent } from './style-view/style-view.component';
import { StyleEditComponent } from './style-edit/style-edit.component';


@NgModule({
  declarations: [MaterialListComponent, StyleListComponent, MaterialAddComponent, 
  StyleAddComponent, MaterialViewComponent, MaterialEditComponent, StyleViewComponent, 
  StyleEditComponent],
  imports: [
    CommonModule,
    MarketRoutingModule, DashboardModule
  ]
})
export class MarketModule { }
