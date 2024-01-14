import { Component, Inject, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { IEmployee } from '../models/employee.interface';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee.dialog.component.html',
  styleUrls: ['./edit-employee.dialog.component.scss'],
})
export class EditEmployeeDialogComponent implements OnInit {
  editEmployeeForm!: FormGroup;
  initEmployee: IEmployee;

  constructor(
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: IEmployee,
    private fb: FormBuilder
  ) {
    this.initEmployee = data;
  }

  ngOnInit() {
    this.editEmployeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
			designation: ['', Validators.required],
			department: ['', Validators.required],
			homePhone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]],
      gender: [''],
      employmentType: [''],
      homeAddress: ['']
    });
    this.editEmployeeForm.patchValue(this.initEmployee);
  }

  save() {
    if (this.editEmployeeForm.valid) {
      const changes: IEmployee = {
        ...this.initEmployee,
        ...this.editEmployeeForm.value
      }

      this.employeeService.saveEmployeeChanges(changes).pipe(
				finalize(() => {
					this.close();
				})).subscribe()
    }
  }

  close() {
    this.dialogRef.close();
  }
}
