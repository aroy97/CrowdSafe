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
      url : '/login'
    },
    {
      title : 'Register Page',
      url : '/register'
    },
    {
      title : 'Upload Page',
      url : '/upload'
    },
    {
      title : 'HeatMap Page',
      url : '/heatmap'
    },
    {
      title : 'Main Page',
      url : '/mainpage'
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
