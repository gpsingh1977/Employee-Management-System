import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../models/employee.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  @Input()
	employee!: IEmployee; 
	  
	constructor() {}

	ngOnInit() {
		
	}

	editEmployee(employee: IEmployee) {}
}
