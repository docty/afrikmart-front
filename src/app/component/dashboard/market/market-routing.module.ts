import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { StyleComponent } from './style/style.component';




const routes: Routes = [
	{path: 'material', component: MaterialComponent},
	{path: 'style', component: StyleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
