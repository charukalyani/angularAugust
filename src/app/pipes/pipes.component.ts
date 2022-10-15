import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name: string = 'viRaT kOhLi';

  mySal: number = 2000;

  today = new Date();

  user = { name: 'pravin', age: 20, salary: 3000 };

  arr = [30,10,40,60,50,20];

  msg: any = '';
  num: number = 0;
}
