import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

import { ConsumerListComponent } from './consumer-list/consumer-list.component';


const routes: Routes = [
	{path: 'staff', component: StaffListComponent},
	{path: 'staff/add', component: StaffAddComponent},
	{path: 'staff/:url/edit', component: StaffEditComponent},
	{path: 'staff/:url', component: StaffProfileComponent},
	{path: 'customer', component: CustomerListComponent},
	{path: 'customer/add', component: CustomerAddComponent},
	{path: 'customer/:url/edit', component: CustomerEditComponent},
	{path: 'customer/:url', component: CustomerProfileComponent},
	{path: 'consumer', component: ConsumerListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
