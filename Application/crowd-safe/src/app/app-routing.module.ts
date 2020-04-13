import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule'},
  // { path: 'register', component: RegisterComponent },
  // { path: 'home', component: MainpageComponent },
  // { path: 'heatmap', component: HeatmapComponent },
  // { path: 'upload', component: UploadComponent },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
