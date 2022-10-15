import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css']
})
export class Observable3Component implements OnInit {
publisher1: any;
subsciber1: any;

subsciber2: any
publisher2: any;

subsciber3: any;
publisher3: any;

subsciber3_even: any;
publisher3_even: any;

  constructor() { }

  ngOnInit(): void {
    let carsArr = ['tata','honda','maruti'];

    this.publisher1 = from(carsArr);
    this.publisher1.subscribe((data: any)=>{
      console.log(data,'next called...')

    });
      this.publisher2 = interval(1000);
     this.subsciber2 = this.publisher2.subsciber2((data: any)=>{
      console.log(data);


     });
  
  }
  ngOnDestroy(){
    this.subsciber1.unsunscibe();
    this.subsciber2.unsunscibe();

  }

}
