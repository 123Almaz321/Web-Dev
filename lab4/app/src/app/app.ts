import { Component } from '@angular/core';
import { Comments } from './comments';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Comments],
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly be.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had.
        </p>
        <p>Angular is great...</p><p>Angular is great...</p><p>Angular is great...</p>
        <p>Angular is great...</p><p>Angular is great...</p><p>Angular is great...</p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
})
export class App {}