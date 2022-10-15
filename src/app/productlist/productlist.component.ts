import { Component, OnInit } from '@angular/core';
import * as data from "./products.json"
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
 products = (data as any).default

 p:any;

 searchText: string = '';

 SortProducts(type : string){
   if(type === 'asc'){
  this.products.sort((p1: any,p2: any)=> p1.price - p2.price)
   }else{
    this.products.sort((p1: any,p2: any)=> p2.price - p1.price)
   }
 }
 
 addToCart(){
 Swal.fire('Good Job','Your item is additng to the card','success');

 }




}
