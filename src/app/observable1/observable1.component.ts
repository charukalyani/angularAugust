import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  users: any[] = [];
  comments: any[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchComments();
  }
    fetchUsers(){
      let promiseObj = fetch('https://jsonplaceholder.typicode.com/users')
      promiseObj.then((response) => response.json()).then
      (finalResponse =>{
        this.users = finalResponse;
        console.log(finalResponse);
      });   

    }

    fetchComments(){
      let obervableObj = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
      obervableObj.subscribe(
        {
          next:(response: any)=>{
              this.comments = response;
          },
          error:(err)=>{
              console.log('error occured',err)
          },
          complete:()=>{
            console.log('final data recieved')

          }
        }
      )
    }
}
