import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  persons: string[] = ['Alex', 'Max', 'Anna'];
  constructor() { }
  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
