import { Component, OnInit } from '@angular/core';

interface Propierty {
  title: string;
  description: string;
  lngLat: [number, number];
}
@Component({
  selector: 'app-propierties',
  templateUrl: './propierties.component.html',
  styles: [
  ]
})
export class PropiertiesComponent implements OnInit {

  Propierties: Propierty[] = [
    {
      title: 'Casa residencial, Canadá',
      description: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      title: 'Casa de playa, México',
      description: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      title: 'Apartamento, Argentina',
      description: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      title: 'Local comercial, España',
      description: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
