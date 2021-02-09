import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MinMapComponent } from './components/min-map/min-map.component';
import { FullscreenComponent } from './pages/fullscreen/fullscreen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiertiesComponent } from './pages/propierties/propierties.component';
import { MarkersComponent } from './pages/markers/markers.component';


@NgModule({
  declarations: [MinMapComponent, FullscreenComponent, ZoomRangeComponent, PropiertiesComponent, MarkersComponent],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
