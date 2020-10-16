import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { StyleListComponent } from './style-list/style-list.component';
import { StyleAddComponent } from './style-add/style-add.component';



const routes: Routes = [
	{path: 'material', component: MaterialListComponent},
	{path: 'material/add', component: MaterialAddComponent},
	{path: 'style', component: StyleListComponent},
	{path: 'style/add', component: StyleAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
