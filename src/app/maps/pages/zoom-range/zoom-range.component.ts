import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .map-container{
      width: 100%;
      height: 100%
    }

    .row{
      width: 250px;
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      margin: 5px;
      padding: 10px;
      position: fixed;
      z-index: 999;
    }

    @media (max-width: 480px){
      .row{
        width: 150px;
      }
    }   
     `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapRange',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.97396426489313, 4.5759589923197455], 
      zoom: 14
    });
  }

}
