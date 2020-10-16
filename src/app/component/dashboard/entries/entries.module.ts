import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard.module';
import { EntriesRoutingModule } from './entries-routing.module';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';


@NgModule({
  declarations: [StaffAddComponent, StaffListComponent, CustomerListComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    EntriesRoutingModule, DashboardModule, FormsModule
  ]
})
export class EntriesModule { }
