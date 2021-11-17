import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscriber, Subscription } from 'rxjs';
import { PersonService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  isFetching: boolean;

  private personService: PersonService;
  private personListSubs: Subscription;

  //Injecting services
  //Using private the effect is the same
  constructor(personService: PersonService) {
    this.personService = personService;
  }
  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.personService.fetchPersons();
    this.personListSubs = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
  }

  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }

}
