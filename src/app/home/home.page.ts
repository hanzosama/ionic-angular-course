import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'This is the text';
  constructor() { }

  chancheText() {
    this.text = 'changed';
  }

}
