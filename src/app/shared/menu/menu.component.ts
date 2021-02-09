import { Component, OnInit } from '@angular/core';

interface MenuItem{
  route: string;
  name: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  `
  li{
    cursor: pointer;
  }
  `
  ]
})
export class MenuComponent implements OnInit {

  menuItem: MenuItem[] = [
    {
      route: '/maps/fullscreen',
      name: 'Full Screen'
    },
    {
      route: '/maps/zoom-range',
      name: 'Zoom Range'
    },
    {
      route: 'maps/markers',
      name: 'Markers'
    },
    {
      route: 'maps/propierties',
      name: 'Propierties'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
