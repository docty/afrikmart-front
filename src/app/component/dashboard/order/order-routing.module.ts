import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingComponent } from './pending/pending.component';
import { CompleteComponent } from './complete/complete.component';
import { ProcessingComponent } from './processing/processing.component';

const routes: Routes = [
	{path: 'pending', component: PendingComponent},
	{path: 'processing', component: ProcessingComponent},
	{path: 'complete', component: CompleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
