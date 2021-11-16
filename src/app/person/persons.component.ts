import { Component } from '@angular/core';
import { PersonService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent {
  personList: string[];

  //Injecting services
  constructor(personService: PersonService) {
    this.personList = personService.persons;
  }

}
