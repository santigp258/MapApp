import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styles: [],
})
export class FullscreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (mapboxgl as any ).accessToken = environment.maxboxToken;
      var map = new mapboxgl.Map({
      container: 'YOUR_CONTAINER_ELEMENT_ID',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  }
}
