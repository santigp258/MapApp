import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarkerColor {
  color: string;
  marker?: mapboxgl.Marker;
  center?: [number, number];
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }

      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MarkersComponent implements AfterViewInit {
  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-75.97396426489313, 4.5759589923197455];

  //array markers

  markers: MarkerColor[] = [];
  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    this.getLocalStorage();
    /*  const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hello World';

    new mapboxgl.Marker({
      element: markerHtml
    })
    .setLngLat(this.center)
    .addTo(this.map) */
  }

  addMarker() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    ); //generate a random hexadecimal number

    const newMarker = new mapboxgl.Marker({
      draggable: true,
      color: color,
    })
      .setLngLat(this.center)
      .addTo(this.map);

    this.markers.push({
      color,
      marker: newMarker,
    });
    //console.log(this.newMarker.getLngLat());
    this.saveMarkerLocalStorage();

    newMarker.on('dragend', () => {
      this.saveMarkerLocalStorage();
    });
  }

  goMarker(marker: mapboxgl.Marker) {
    const { lng, lat } = marker.getLngLat();
    this.map.flyTo({
      center: [lng, lat],
      essential: true,
    });
  }

  saveMarkerLocalStorage() {
    const lngLatArr: MarkerColor[] = [];

    this.markers.forEach((m) => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        center: [lng, lat],
      });
    });
    //save localtorage
    localStorage.setItem('markers', JSON.stringify(lngLatArr));
  }


  getLocalStorage() {
    if (!localStorage.getItem('markers')) {
      return;
    }

    const lngLatArr: MarkerColor[] = JSON.parse(
      localStorage.getItem('markers')!
    );

    lngLatArr.forEach((m) => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.center!)
        .addTo(this.map);

      this.markers.push({
        marker: newMarker,
        color: m.color,
      });
      //guardar cuando se muevo los markers
      newMarker.on('dragend', () => {
        this.saveMarkerLocalStorage();
      });
    });
  }


  deleteMarker(i: number){
    this.markers[i].marker?.remove();

    this.markers.splice(i, 1);

    this.saveMarkerLocalStorage();
  }
}
