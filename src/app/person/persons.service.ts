import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class PersonService {
  persons: string[] = ['Alex', 'Max', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
  }

}
