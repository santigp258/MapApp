import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }

      .row {
        width: 250px;
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        margin: 5px;
        padding: 10px;
        position: fixed;
        z-index: 999;
      }

      @media (max-width: 480px) {
        .row {
          width: 150px;
        }
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-75.97396426489313, 4.5759589923197455];

  constructor() {
    console.log('const', this.divMap);
  }

  ngOnDestroy(){
    //clean event
    this.map.off('zoom', ()=>{});
    this.map.off('zoomend', ()=>{});
    this.map.off('zoommove', ()=>{});
  }

  //para que se cree después del component
  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    //map zomm
    this.map.on('zoom', (event) => {
      this.zoomLevel = this.map.getZoom();
    });

    this.map.on('zoomend', (event) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });

    //move map
    this.map.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });
  }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomChange(value: string) {
    this.map.zoomTo(Number(value));
  }
}
