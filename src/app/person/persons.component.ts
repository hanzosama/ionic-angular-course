import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent {
 // Binding the data
  @Input() personList: string[];
}
