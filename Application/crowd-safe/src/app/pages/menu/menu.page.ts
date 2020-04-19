import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title : 'Login Page',
      url : '/menu/login'
    },
    {
      title : 'Register Page',
      url : '/menu/register'
    },
    {
      title : 'Upload Page',
      url : '/menu/upload'
    },
    {
      title : 'HeatMap Page',
      url : '/menu/heatmap'
    },
    {
      title : 'Main Page',
      url : '/menu/mainpage'
    }
  ]

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}
