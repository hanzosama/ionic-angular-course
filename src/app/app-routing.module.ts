import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PersonInputComponent } from './person/person-input.component';
import { PersonsComponent } from './person/persons.component';

const routes: Routes = [
  {
    path: '', component: PersonsComponent
  },
  {
    path: 'input', component: PersonInputComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
