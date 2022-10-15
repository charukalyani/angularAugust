import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n: number = 5;

  age: number = 17;

  cars: string[] = ['tata','honda','toyota','maruti'];

  flag:boolean = true;

toggleFlag(){
  this.flag = !this.flag
}

employees = [
  { eId: 101, name: "sanjay", sal: 5000, cars : ['tata','honda'] },
  { eId: 104, name: "deepak", sal: 8000,},
  { eId: 103, name: "ranjan", sal: 7000,},
  { eId: 102, name: "manoj", sal: 9000 },
 
]
}
