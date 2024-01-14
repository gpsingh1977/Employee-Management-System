import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { IEmployee } from '../models/employee.interface';

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee.dialog.component.html',
  styleUrls: ['./create-employee.dialog.component.scss'],
})
export class CreateEmployeeDialogDialogComponent implements OnInit {
  createEmployeeForm!: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<CreateEmployeeDialogDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createEmployeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
			designation: ['', Validators.required],
			department: ['', Validators.required],
			homePhone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]]
    });
  }

  save() {
    if (this.createEmployeeForm.valid) {
      const newEmployee: IEmployee = this.createEmployeeForm.value;

      this.employeeService.createEmployee(newEmployee).pipe(
				finalize(() => {
					this.close();
				})).subscribe()
    }
  }

  close() {
    this.dialogRef.close();
  }
}
