import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainpagePageRoutingModule } from './mainpage-routing.module';

import { MainpagePage } from './mainpage.page';
import { NgxLoadingModule } from 'ngx-loading';

import * as FusionCharts from 'fusioncharts';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionMaps from "fusionmaps/fusioncharts.maps";
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as India from 'fusioncharts/maps/fusioncharts.india';

FusionChartsModule.fcRoot(FusionCharts, FusionMaps, India, FusionTheme);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainpagePageRoutingModule,
    NgxLoadingModule.forRoot({}),
    FusionChartsModule
  ],
  declarations: [MainpagePage]
})
export class MainpagePageModule {}
