import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css'],
})
export class RegistrationformComponent implements OnInit {

  title:string = 'Template Driven Form';
  firstName: any;
  courseId = "Select Course";
  stateId = "Select State";

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
