import { Component, OnInit } from '@angular/core';
import { PersonService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit {
  personList: string[];
  private personService: PersonService;

  //Injecting services
  //Using private the effect is the same
  constructor(personService: PersonService) {
    this.personService = personService;
  }

  ngOnInit(): void {
    this.personList = this.personService.persons;
  }

}
