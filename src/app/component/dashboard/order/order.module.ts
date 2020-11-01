import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard.module';
import { OrderRoutingModule } from './order-routing.module';
import { PendingComponent } from './pending/pending.component';
import { CompleteComponent } from './complete/complete.component';
import { ProcessingComponent } from './processing/processing.component';


@NgModule({
  declarations: [PendingComponent, CompleteComponent, ProcessingComponent],
  imports: [
    CommonModule,
    OrderRoutingModule, DashboardModule
  ]
})
export class OrderModule { }
