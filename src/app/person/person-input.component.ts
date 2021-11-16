import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { PersonService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})


export class PersonInputComponent implements OnInit {

  enteredPersonName = '';

  constructor(private personService: PersonService) {

  }

  onCreatePerson() {
    console.log('Creating a person: ' + this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }

  ngOnInit(): void {

  }
}
