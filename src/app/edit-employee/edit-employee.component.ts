import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { map, switchMap } from "rxjs";
import { EmployeeService } from "../services/employee-service";
import { EditEmployeeDialogComponent } from "../edit-employee-dialog/edit-employee.dialog.component";

@Component({
	selector: 'app-edit-employee',
	templateUrl: './edit-employee.component.html',
	styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
	constructor(public dialog: MatDialog, public router: Router, public route: ActivatedRoute, 
		public employeeService: EmployeeService) {}

	ngOnInit() {
		this.route.paramMap.pipe(
			map((params: ParamMap) => { 
				const id = +params.get('id')!;
				return this.employeeService.getEmployeeById(id);
			}),
			switchMap(employee => {
				return this.dialog.open(EditEmployeeDialogComponent, {
					disableClose: true,
					autoFocus: false,
					maxHeight: '90vh',
					data: {...employee}
				}).afterClosed();
			})
		).subscribe(() => {
			this.router.navigate(['/employees']);
		})
	}
}