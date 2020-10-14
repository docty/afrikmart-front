import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 	{path: '', component: HomeComponent},
 	{
	    path: 'product',
	    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  	},
  	{
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  	},
  	{
    path: 'entries',
    loadChildren: () => import('./entries/entries.module').then(m => m.EntriesModule)
  	},
  	{
    path: 'market',
    loadChildren: () => import('./market/market.module').then(m => m.MarketModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
