import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './extras/wallet/wallet.component';
import { ReviewComponent } from './extras/review/review.component';
import { HomepageComponent } from './extras/homepage/homepage.component';

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
  },
  {path: 'wallet', component: WalletComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'client/homepage', component: HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
