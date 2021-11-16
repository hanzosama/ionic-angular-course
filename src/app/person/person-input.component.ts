import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  @Output() personCreated = new EventEmitter<string>();
  enteredPersonName = '';

  onCreatePerson() {
    console.log('Creating a person: ' + this.enteredPersonName);
    this.personCreated.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
