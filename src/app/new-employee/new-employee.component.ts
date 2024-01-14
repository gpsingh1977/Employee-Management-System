import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateEmployeeDialogDialogComponent } from "../create-employee-dialog/create-employee.dialog.component";
import { Router } from "@angular/router";

@Component({
	selector: 'app-new-employee',
	templateUrl: './new-employee.component.html',
	styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
	constructor(public dialog: MatDialog, public router: Router) {}

	ngOnInit() {
		this.dialog.open(CreateEmployeeDialogDialogComponent, {
      disableClose: true,
      autoFocus: false,
      maxHeight: '90vh'
    }).afterClosed().subscribe(() => {
			this.router.navigate(['/employees']);
		})
	}
}