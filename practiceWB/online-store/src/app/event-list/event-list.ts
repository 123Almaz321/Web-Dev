import { Component } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventCardComponent],
  template: `
    <div class="event-grid">
      @for (currentEvent of events; track currentEvent.id) {
        <app-event-card [event]="currentEvent"></app-event-card>
      }
    </div>
  `,
  styleUrls: ['./event-list.css']
})
export class EventListComponent {
  events: Event[] = [
    {
      id: 1,
      name: 'Coldplay: Music of the Spheres Almaty',
      description: 'The world-famous band comes to Almaty Central Stadium for the first time. Experience an incredible show with LED wristbands and fireworks.',
      price: 45000,
      rating: 5.0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPKkacpz4e4ux8E310LyN_1Cgn_sGhFz7yg&s',
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      link: 'https://ticketon.kz/event/coldplay-almaty'
    },
    {
      id: 2,
      name: 'The Phantom of the Opera: Almaty Tour',
      description: 'A special Broadway production at the Abay Opera House. The legendary story of the Opera Ghost with original costumes and sets.',
      price: 32000,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9XfCG1heZmJ29BEIKkEVgmRb6ZXeQ7twWg&s',
      images: ['b1.jpg', 'b2.jpg', 'b3.jpg'],
      link: 'https://ticketon.kz/event/phantom-opera-almaty'
    },
    {
      id: 3,
      name: 'ATP 250: Almaty Open Finals',
      description: 'World tennis stars compete for the title at Almaty Arena. See professional grass-court masters live in the heart of Kazakhstan.',
      price: 15000,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPKkacpz4e4ux8E310LyN_1Cgn_sGhFz7yg&s',
      images: ['t1.jpg', 't2.jpg', 't3.jpg'],
      link: 'https://ticketon.kz/event/almaty-open-2026'
    },
    {
      id: 4,
      name: 'Linkin Park: Live at Almaty Arena',
      description: 'The iconic rock band brings their From Zero World Tour to Kazakhstan. A night of pure energy and legendary alternative rock hits.',
      price: 38000,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9XfCG1heZmJ29BEIKkEVgmRb6ZXeQ7twWg&s',
      images: ['lp1.jpg', 'lp2.jpg', 'lp3.jpg'],
      link: 'https://ticketon.kz/event/linkin-park-almaty'
    },
    {
      id: 5,
      name: 'Metallica: M72 Tour Kazakhstan',
      description: 'The heavy metal legends perform a massive open-air show at the Central Stadium. Two nights of non-repeat setlists for true fans.',
      price: 55000,
      rating: 5.0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPKkacpz4e4ux8E310LyN_1Cgn_sGhFz7yg&s',
      images: ['m1.jpg', 'm2.jpg', 'm3.jpg'],
      link: 'https://ticketon.kz/event/metallica-almaty'
    },
    {
      id: 6,
      name: 'Tomorrowland: Almaty Digital Edition',
      description: 'The worlds biggest EDM festival presents a special stage in Almaty. Featuring top world DJs and incredible 3D visual effects.',
      price: 25000,
      rating: 5.0,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9XfCG1heZmJ29BEIKkEVgmRb6ZXeQ7twWg&s',
      images: ['tm1.jpg', 'tm2.jpg', 'tm3.jpg'],
      link: 'https://ticketon.kz/event/tomorrowland-kz'
    },
    {
      id: 7,
      name: 'Red Hot Chili Peppers: Live in KZ',
      description: 'Funk-rock legends at the Almaty Arena. Experience the high-energy performance of Anthony Kiedis and Flea live on stage.',
      price: 42000,
      rating: 4.7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPKkacpz4e4ux8E310LyN_1Cgn_sGhFz7yg&s',
      images: ['rh1.jpg', 'rh2.jpg', 'rh3.jpg'],
      link: 'https://ticketon.kz/event/rhcp-almaty'
    },
    {
      id: 8,
      name: 'Skillet: Day of Destiny Almaty',
      description: 'Hard rock power returns to Kazakhstan. The band performs their biggest hits at the Almaty Arena for thousands of fans.',
      price: 18000,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9XfCG1heZmJ29BEIKkEVgmRb6ZXeQ7twWg&s',
      images: ['sk1.jpg', 'sk2.jpg', 'sk3.jpg'],
      link: 'https://ticketon.kz/event/skillet-almaty'
    },
    {
      id: 9,
      name: 'Green Day: Saviors Almaty Tour',
      description: 'Punk-rock celebration at the Central Stadium. The band celebrates 30 years of Dookie with an explosive performance.',
      price: 28000,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPKkacpz4e4ux8E310LyN_1Cgn_sGhFz7yg&s',
      images: ['gd1.jpg', 'gd2.jpg', 'gd3.jpg'],
      link: 'https://ticketon.kz/event/green-day-almaty'
    },
    {
      id: 10,
      name: 'Glastonbury Almaty Rock Fest',
      description: 'A massive three-day rock festival in the mountains of Almaty. Featuring a legendary mix of international headliners and local talent.',
      price: 35000,
      rating: 4.9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9XfCG1heZmJ29BEIKkEVgmRb6ZXeQ7twWg&s',
      images: ['gl1.jpg', 'gl2.jpg', 'gl3.jpg'],
      link: 'https://ticketon.kz/event/glastonbury-kz'
    }
  ];
}