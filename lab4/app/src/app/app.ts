import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: ` 
    <div contentEditable="false"><img alt="photo" [src]="imageURL" /></div> 
  `,
})
export class App {
  isEditable = true;
  imageURL = "https://gstatic-wsc.olympics.com/games/7b2e170fbbde0f95e1a08fe2c9a26ce4/693c17986e6132d077dc97da_SquareIcon_bd0002b6-f29d-4e0a-8ec0-09933cd390d8.jpg";
}