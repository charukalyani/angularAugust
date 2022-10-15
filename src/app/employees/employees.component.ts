import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  employees: any =  [
    { eId: 101, name: 'sanjay', sal: 5000, gender: "male" },
    { eId: 104, name: 'deepa', sal: 8000, gender: "female" },
    { eId: 103, name: 'ranjan', sal: 7000, gender: "male"},
    { eId: 102, name: 'reena', sal: 9000,  gender: "female"},
  ];

  val1: any;
  val2: any;
  val3: any;

  flag: boolean = true;
  flagbtn: boolean = true;

  // delete an employee
  delete(empid: number){
    this.employees.forEach((value:any, index:any)=>{
      if(value.eId == empid) this.employees.splice(index, 1);
    });
  }

  // View an employee
  view(empid: number){
    let result = this.employees.find((obj:any)=>{
      return obj.eId == empid;
    });
    this.val1 = result?.eId;
    this.val2 = result?.name;
    this.val3 = result?.sal;
    this.flag = true;
  }

  // Edit an Employee
  edit(empid: number){
    let result = this.employees.find((obj:any)=>{
      return obj.eId == empid;
    });
    this.val1 = result?.eId;
    this.val2 = result?.name
    this.val3 = result?.sal;
    this.flag = false;
    this.flagbtn = false;
   
  }

  add(){
    let result = this.employees.find((obj:any)=>{
      return obj.eId = this.val1;
    });

    var emp = {
      eId:this.val1,
      name:this.val2,
      sal:this.val3
    };

    if(result?.eId == undefined || result?.eId == 0){
      this.employees.push(emp);
      Swal.fire(
        '',
        'Employee is added',
        'success'
      )
    }else{
      let empIndex = this.employees.findIndex(
        (item:any)=> item.eId == this.val1
        );
        this.employees[empIndex] = emp;
        Swal.fire(
          '',
          'employee is updated !',
          'success'
        )
    }
    this.val1 = 0;
    this.val2 = "";
    this.val3 = 0;

  }
  // ngfor directive with trackby
  trackByEmpId(employee: any){
    return employee.eId;
  }
}
