import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard.module';
import { OrderRoutingModule } from './order-routing.module';
import { PendingComponent } from './pending/pending.component';
import { CompleteComponent } from './complete/complete.component';


@NgModule({
  declarations: [PendingComponent, CompleteComponent],
  imports: [
    CommonModule,
    OrderRoutingModule, DashboardModule
  ]
})
export class OrderModule { }
