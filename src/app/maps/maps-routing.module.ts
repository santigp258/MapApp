import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullscreenComponent } from './pages/fullscreen/fullscreen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiertiesComponent } from './pages/propierties/propierties.component';
import { MarkersComponent } from './pages/markers/markers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen',
        component: FullscreenComponent,
      },
      {
        path: 'zoom-range',
        component: ZoomRangeComponent,
      },
      {
        path: 'markers',
        component: MarkersComponent,
      },
      {
        path: 'propierties',
        component: PropiertiesComponent,
      },
      {
        path: '**',
        redirectTo: 'fullscreen',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
