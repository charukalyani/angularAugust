import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'Pranav';

  img_url: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXV_XNYioOsBHNMg4UlXPnM6G9dzETHCiVFw&usqp=CAU';

  flag = true;

  f1() {
    console.log('this is f1....');
  }

  toggle() {
    this.flag = !this.flag;
  }

  show = false;
  password() {
    this.show = !this.show;
  }
  num1: number = 0;
  num2: number = 0;

  
  addition(a: any, b: any) {
    console.log('addtion is ' + (+a + +b));
  }

  val1: number = 0;

  n1: number = 0;

  
}
