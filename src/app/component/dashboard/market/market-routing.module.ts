import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { StyleListComponent } from './style-list/style-list.component';
import { StyleAddComponent } from './style-add/style-add.component';
import { StyleViewComponent } from './style-view/style-view.component';
import { StyleEditComponent } from './style-edit/style-edit.component';


const routes: Routes = [
	{path: 'material', component: MaterialListComponent},
	{path: 'material/add', component: MaterialAddComponent},
	{path: 'material/:url', component: MaterialViewComponent },
	{path: 'material/:url/edit', component: MaterialEditComponent},
	{path: 'style', component: StyleListComponent},
	{path: 'style/add', component: StyleAddComponent},
	{path: 'style/:url', component: StyleViewComponent },
	{path: 'style/:url/edit', component: StyleEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
