import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';
import { WalletComponent } from './extras/wallet/wallet.component';
import { ReviewComponent } from './extras/review/review.component';
import { HomepageComponent } from './extras/homepage/homepage.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, SiderComponent, WalletComponent, ReviewComponent, HomepageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, FormsModule, NgxDropzoneModule
  ],
  exports: [HeaderComponent, SiderComponent, FormsModule]
})
export class DashboardModule { } 
