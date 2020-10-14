import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';


const routes: Routes = [
	{path: 'staff', component: StaffListComponent},
	{path: 'staff/add', component: StaffAddComponent},
	{path: 'customer', component: CustomerListComponent},
	{path: 'customer/add', component: CustomerAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
