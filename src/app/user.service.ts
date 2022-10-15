import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_url = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  GetUsers() {
    return this.httpClient.get(this.api_url);
  }

  AddUser(objUser: any) {
    return this.httpClient.post(this.api_url, objUser);
  }

  DeleteUser(id: number) {
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }
  
  EditUser(id: number, objUser: any) {
    return this.httpClient.patch(`${this.api_url}/${id}`, objUser);
  }

  ViewUser(id: number, objUser:any){
    return this.httpClient.patch(`${this.api_url}/${id}`, objUser);
  }
}
