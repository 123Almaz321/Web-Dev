import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from './event-list/event-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventListComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'online-store';
}