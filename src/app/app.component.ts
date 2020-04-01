import { Component } from '@angular/core';
import { Employee } from './models/employee'
import { emptyScheduled } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray:Employee[]=[
    {id:1,name:'kevin',country:'peru'},
    {id:2,name:'jose',country:'bolivia'}
  ];

  selectedEmployee:Employee = new Employee();

  openEdit(employee:Employee){
    this.selectedEmployee = employee;
  }

  addOedit(){
    if(this.selectedEmployee.id === 0 ){
      this.selectedEmployee.id = this.employeeArray.length+1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  deleteItem(){
    if( confirm ('quieres eliminar!')){
      this.employeeArray = this.employeeArray.filter(x => x !=this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
