import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IEmployee } from '../models/employee.interface';
import { Observable, map, of, switchMap } from 'rxjs';
import { EmployeeService } from '../services/employee-service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit{
	employee$!: Observable<IEmployee>;

	constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

	ngOnInit() {
		this.employee$ = this.route.paramMap.pipe(
			map((params: ParamMap) => +params.get('id')!),
			switchMap(id => of(this.employeeService.getEmployeeById(id)))
		)
	}
}
