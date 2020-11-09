import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard.module';
import { EntriesRoutingModule } from './entries-routing.module';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';




@NgModule({
  declarations: [StaffAddComponent, StaffListComponent, CustomerListComponent, CustomerAddComponent,
   StaffEditComponent,
   StaffProfileComponent,
   CustomerProfileComponent,
   CustomerEditComponent,
   ConsumerListComponent],
  imports: [
    CommonModule,
    EntriesRoutingModule, DashboardModule, FormsModule
  ]
})
export class EntriesModule { }
