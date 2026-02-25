import { Component } from '@angular/core';
import { PrdList } from './prd-list/prd-list'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrdList, RouterOutlet], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tit = 'online-store';
}