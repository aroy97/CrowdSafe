import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxLoadingModule } from 'ngx-loading';
import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxLoadingModule.forRoot({})
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
