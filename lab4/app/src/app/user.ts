import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>The user's occupation is {{occupation()}}</p>`
})
export class User {
  occupation = input<string>();
}