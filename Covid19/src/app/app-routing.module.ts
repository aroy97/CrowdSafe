import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { AboutComponent } from './about/about.component';
import { TestingComponent } from './testing/testing.component';
import { UploadComponent } from './upload/upload.component';
import { SymptomsComponent } from './symptoms/symptoms.component';


const routes: Routes = [

  { path: '', redirectTo: 'heatmap', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: MainpageComponent },
  { path: 'heatmap', component: HeatmapComponent },
  { path: 'about', component: AboutComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'symptoms', component: SymptomsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
