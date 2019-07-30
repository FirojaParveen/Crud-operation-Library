import { Component } from '@angular/core';
import { Employee } from '../lib/ngx-crud-operation-lib.model';

@Component({
  selector: 'ngx-crud-operation-lib',
  templateUrl: './ngx-crud-operation-lib.component.html'
})
export class NgxCrudOperationLibComponent {

  employees: any;
  isForUpdate: boolean;
  newEmployee: any;
  updatedItem;


  constructor() {
    this.employees = new Array<Employee>();
    this.newEmployee = new Employee();
    this.isForUpdate = false;
  }

  addEmployee() {
    console.log(this.newEmployee);
    this.employees.push(
      this.newEmployee
    );
    this.newEmployee = new Employee();
  }


  // When user selects edit option  
  editEmployee(j) {
    console.log(this.employees[j]);
    this.newEmployee = this.employees[j];
    this.updatedItem = j;
    this.isForUpdate = true;
  }

  // When user clicks on update button to submit updated value  
  updateEmployee() {
    for (let i = 0; i < this.employees.length; i++) {
      if (i == this.updatedItem) {
        this.employees[i] = this.newEmployee;
      }
    }
    this.isForUpdate = false;
    this.newEmployee = new Employee();
  }
  deleteEmployee(i) {
    this.employees.splice(i, 1);
  }
}
