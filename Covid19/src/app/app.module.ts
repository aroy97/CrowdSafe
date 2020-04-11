import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NgxLoadingModule } from 'ngx-loading';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as FusionMaps from "fusionmaps/fusioncharts.maps";
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as India from 'fusioncharts/maps/fusioncharts.india';
// import * as Andaman from 'fusioncharts/maps/fusioncharts.andamanandnicobar';
import * as WestBengal from 'fusioncharts/maps/fusioncharts.westbengal';
import { HeatmapComponent } from './heatmap/heatmap.component';



FusionChartsModule.fcRoot(FusionCharts, FusionMaps, India, WestBengal, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    HeatmapComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    NgxLoadingModule.forRoot({}),
    FormsModule,
    HttpClientModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
