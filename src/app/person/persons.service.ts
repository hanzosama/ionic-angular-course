import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonService {
  personsChanged = new Subject<string[]>();
  persons: string[];

  constructor(private http: HttpClient) {

  }

  // Exxample how to get data from API
  fetchPersons() {
    this.http.get<any>('https://swapi.dev/api/people/')
    //aut mapping the json response
      .pipe(map(restData => restData.results.map(character => character.name)))
      .subscribe(transformedData => {
        this.personsChanged.next(transformedData);
      });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    //lambda expression
    this.persons = this.persons.filter(person => person !== name);
    console.log(this.persons);
    this.personsChanged.next(this.persons);

  }

}
