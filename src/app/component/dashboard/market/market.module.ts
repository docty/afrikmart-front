import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard.module';
import { MarketRoutingModule } from './market-routing.module';
import { MaterialComponent } from './material/material.component';
import { StyleComponent } from './style/style.component';


@NgModule({
  declarations: [MaterialComponent, StyleComponent],
  imports: [
    CommonModule,
    MarketRoutingModule, DashboardModule
  ]
})
export class MarketModule { }
