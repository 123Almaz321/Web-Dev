import { Component, Input } from '@angular/core';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-card',
  standalone: true,
  templateUrl: './event-card.html',
  styleUrls: ['./event-card.css']
})
export class EventCardComponent {
  @Input() event!: Event;

  shareToTelegram() {
    const text = encodeURIComponent(`Посмотри это событие: ${this.event.name}`);
    const url = encodeURIComponent(this.event.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  shareToWhatsApp() {
    const url = encodeURIComponent(this.event.link);
    window.open(`https://wa.me/?text=Check out this event: ${url}`, '_blank');
  }
}