import { Component, inject } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Список машин</h1>
    <ul>
      @for (car of carSrv.getCars(); track car) {
        <li>{{ car }}</li>
      }
    </ul>
  `,
})
export class App {
  carSrv = inject(CarService);
}