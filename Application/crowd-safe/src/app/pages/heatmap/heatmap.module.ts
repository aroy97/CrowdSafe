import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeatmapPageRoutingModule } from './heatmap-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { HeatmapPage } from './heatmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeatmapPageRoutingModule,
    NgxLoadingModule.forRoot({})
  ],
  declarations: [HeatmapPage]
})
export class HeatmapPageModule {}
