import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { UploadComponent } from './upload/upload.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component'
import * as FusionCharts from 'fusioncharts';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionMaps from "fusionmaps/fusioncharts.maps";
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as India from 'fusioncharts/maps/fusioncharts.india';
import { LoginPage } from './pages/login/login.page'

FusionChartsModule.fcRoot(FusionCharts, FusionMaps, India, FusionTheme);


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, MenuComponent, UploadComponent, MainpageComponent, HeatmapComponent, HeaderComponent, FooterComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxLoadingModule.forRoot({}), HttpClientModule, CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    HttpClientModule,
    FusionChartsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
