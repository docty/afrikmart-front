import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, SiderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [HeaderComponent, SiderComponent, FormsModule]
})
export class DashboardModule { }
